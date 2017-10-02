const path = require('path')
const xps = require("./xps.js")
const session = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const app = xps.app();
let PORT = process.env.PORT || 3000;

console.log("SERVER STARTED")

xps.go(app,
  {
    staticView: "public", // Also takes an array of strings for multiple view folders.
    viewEngine: "express-handlebars",
    bodyParse: ["json", "raw", "urlencoded", "text"], // TRUE or [ARRAY]
    validator: true,
    cookieParse: true,
    flash: true,
    httpLogger: "morgan",
    //port: 3000, // Either an INT or STRING
  }
)

// Handle Sessions
// -----------------------------------------------------------------------------
app.use(session({
  secret:'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport
// -----------------------------------------------------------------------------
app.use(passport.initialize());
app.use(passport.session());


// Routes
// -----------------------------------------------------------------------------

// Register
// let register = require(path.join(__dirname, "controller/register-view.js"))
// app.use("/", register)


app.get('/', function(req, res){
  res.send('Craigslist');
});

// Display 404 for unrecognized Routes
app.get('*', function(req, res){
  res.send('404');
});


// Database Models
// -----------------------------------------------------------------------------
let db = require('./models')


db.sequelize.sync().then(function(){
  app.listen(PORT, (err)=>{
    if (err) console.log(err)
    console.log("++ Server started on PORT ", PORT)
  })
})
