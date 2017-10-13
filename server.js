require('dotenv-safe').load();
const path = require('path')
const xps = require("./xps.js")
const bodyParser = require('body-parser');
const session = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const app = xps.app();

let PORT = process.env.PORT || 3001;

xps.go(app,
  {
    validator: true,
    cookieParse: true,
    httpLogger: "morgan",
  }
)

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

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
let post_Page = require(path.join(__dirname, "routes/post-page-api.js"))
app.use("/api", post_Page)



// Display 404 for unrecognized Routes
app.get('*', function(req, res){
  res.send('404');
  console.log(req.cookies.cookieId)
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
