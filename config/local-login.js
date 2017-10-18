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
      console.log("data= " + dbUser.id)
      const payload = {
          sub: dbUser.id
            };
            console.log(payload.sub)
            // create a token string
            const token = jwt.sign(payload, process.env.JWT_SECRET);
            const data = {
              name: dbUser.name
            };
          console.log("passing the token" + token)
      return done(null, token, dbUser);
    });
  });

//   // find a user by email address
//   return db.user.findOne({where: { email: userData.email }}, (err, user) => {
//     console.log('checking email');
//     if (err) { return done(err); }
//
//     if (!user) {
//       const error = new Error('Incorrect email or password');
//       error.name = 'IncorrectCredentialsError';
//
//       return done(error);
//     }
//
//     // check if a hashed user's password is equal to a value saved in the database
//     return db.user.prototype.validPassword(userData.password, (passwordErr, isMatch) => {
//       if (err) { return done(err); }
//
//       if (!isMatch) {
//         const error = new Error('Incorrect email or password');
//         error.name = 'IncorrectCredentialsError';
//
//         return done(error);
//       }
//
//       const payload = {
//         sub: user._id
//       };
//
//       // create a token string
//       const token = jwt.sign(payload, process.env.JWT_SECRET);
//       const data = {
//         name: user.name
//       };
//
//       return done(null, token, data);
//     });
//   });
// });
