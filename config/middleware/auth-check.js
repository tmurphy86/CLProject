const jwt = require('jsonwebtoken');
const db = require('../../models');


/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  console.log("auth route please" + req.headers)
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];
  console.log(token)
  // decode the token using a secret key-phrase
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    console.log(decoded)
    // the 401 code is for unauthorized status
    if (err) { return res.status(401).end(); }

    const userId = decoded.sub;

    // check if a user exists
    return db.user.findById(userId, (userErr, user) => {
      console.log("what is this user:" + user)
      if (userErr || !user) {
        return res.status(401).end();
      }

      return next();
    });
  });
};
