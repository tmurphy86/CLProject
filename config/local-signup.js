const db = require('../models');
const PassportLocalStrategy = require('passport-local').Strategy;


/**
 * Return the Passport Local Strategy object.
 */

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
 newUser.save((err) => {
   if (err) { return done(err); }

   return done(null);
 });
});
  // db.user.find({ where: { email: email }}).success(function(user) {
  //       if (!user) {
  //         done(null, false, { message: 'Unknown user' });
  //       } else if (password != user.password) {
  //         done(null, false, { message: 'Invalid password'});
  //       } else {
  //         done(null, user);
  //       }
  //     }).error(function(err){
  //       done(err);
  //     });
  //   });
