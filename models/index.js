'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = process.env;
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(config.JAWS_DATABASE, config.JAWS_USERNAME, config.JAWS_PASSWORD, {host: config.JAWS_HOST, port: config.JAWS_PORT, dialect: config.JAWS_DIALECT});
} else {
  var sequelize = new Sequelize(config.DB_DATABASE, config.DB_USERNAME, config.DB_PASSWORD, {host: config.DB_HOST, port: config.DB_PORT, dialect: config.DB_DIALECT});
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
