const db = require('../models');
const PassportLocalStrategy = require('passport-local').Strategy;

//Local Signup Strategy using passport
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
   email: email.trim(),
   password: password.trim(),
   name: req.body.name.trim()
 };

 const newUser = new db.user(userData);
 newUser.save().then((user) => {
   
   return done(null, user);

 }).catch(function(err){

   return done (err);

 });
});
