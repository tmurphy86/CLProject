const jwt = require('jsonwebtoken');
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
    password: password.trim()
  };

  db.user.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      const payload = {
          sub: dbUser.id
            };
      // create a token string
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      const data = {
        name: dbUser.name
      };
      return done(null, token, dbUser);
    });
  });
