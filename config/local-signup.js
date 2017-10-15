const User = require("../models/Users");
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
    console.log(req.body)
    console.log(email)
    console.log(password)
    console.log(done)
    return done(null);
  });
