var securePassword = require('secure-password');
// Initialise our password policy
var pwd = securePassword();

module.exports = function(sequelize, DataTypes) {

  let User = sequelize.define('user',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    location: {
      type: DataTypes.STRING,
      defaultValue: 'No Location Provided'
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: 'Not Provided'
    },
    bio: {
      type: DataTypes.TEXT,
    },
    color: {
      type: DataTypes.STRING,
      defaultValue: '#607d8b'
    },
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function(password) {
      return pwd.verifySync(Buffer.from(password), Buffer.from(this.password));
    };


    // Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
    User.hook("beforeCreate", function(user) {

      var userPassword = Buffer.from(user.password);
        // if (!user.isModified('password')) return user();
      // Register user
      var hash = pwd.hashSync(userPassword);
      var result = pwd.verifySync(userPassword, hash);
      user.password=hash;
    });

  return User;
}
