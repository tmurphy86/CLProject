var securePassword = require('secure-password');
var pwd = securePassword();

//Model for user
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user',
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
        isUnique: function(value, next) {
           User.find({
                   where: {email: value},
                   attributes: ['id']
               }).done(function(error, user) {
                       if (error)
                           return next(error);
                       if (user)
                           return next('Email address already in use!');
                       next();
                     });
                   },
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

// Password validation method
User.prototype.validPassword = function(password) {
    return pwd.verifySync(Buffer.from(password), Buffer.from(this.password));
  };

    //Before create users password is hashed using argon2 and a color is assigned
User.hook("beforeCreate", function(user) {
    //assigns user random color on signup
    const userColorArray = ['#dc3545 ', '#f44336 ', '#9c27b0 ', '#673ab7 ', '#3f51b5 ', '#2196f3 ', '#009688 ', '#4caf50 ', '#8bc34a ', '#cddc39 ', '#ffc107 ', '#ff9800 ', '#ff5722 ', '#607d8b ']
    const randColor = userColorArray[Math.floor(Math.random() * userColorArray.length)];
    user.color=randColor;
    var userPassword = Buffer.from(user.password);
    var hash = pwd.hashSync(userPassword);
    var result = pwd.verifySync(userPassword, hash);
    user.password=hash;
  });

  return User;
}
