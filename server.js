require('dotenv-safe').load();
const path = require('path')
const bodyParser = require('body-parser');
const session = require('express-session')
const passport = require('passport');
const express = require('express');


const app = express();

const PORT = process.env.PORT || 3001;

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.use(express.static("client/build"));

// Passport
// -----------------------------------------------------------------------------
app.use(passport.initialize());
app.use(passport.session());

// load passport strategies
const localSignupStrategy = require('./config/local-signup');
const localLoginStrategy = require('./config/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


// pass the authenticaion checker middleware
const authCheckMiddleware = require('./config/middleware/auth-check');
app.use('/api', authCheckMiddleware);


// Private Routes
// -----------------------------------------------------------------------------
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Submit new Post
const new_Post = require(path.join(__dirname, "routes/new-post-api.js"))
app.use("/api/newpost", new_Post)

// Manage Favorites
const favorites = require(path.join(__dirname, "routes/favorites-api.js"))
app.use("/api/favorites", favorites)

// Dashboard
const dashboard = require(path.join(__dirname, "routes/dashboard-api.js"))
app.use("/api/dashboard", dashboard)


// Dashboard
const edit_Post = require(path.join(__dirname, "routes/edit-post-api.js"))
app.use("/api/editpost", edit_Post)

// Messages
const messages = require(path.join(__dirname, "routes/messages-api.js"))
app.use("/api/messages", messages)




//Public Routes
// -----------------------------------------------------------------------------

// Categories
const categories = require(path.join(__dirname, "routes/categories-api.js"))
app.use("/public/api/categories", categories)

// Grab Posts from Specifict Category
const category_posts = require(path.join(__dirname, "routes/category-posts-api.js"))
app.use("/public/api/category", category_posts)

// Render Post
const post_Page = require(path.join(__dirname, "routes/post-page-api.js"))
app.use("/public/api", post_Page)

// Search
const search = require(path.join(__dirname, "routes/search-api.js"))
app.use("/public/api/search", search)

// Database Models
let db = require('./models')


db.sequelize.sync({force:false}).then(function(){
  app.listen(PORT, (err)=>{
    if (err) console.log(err)
    console.log("++ Server started on PORT ", PORT)
  })
})
