module.exports = function (sequelize, DataTypes) {
  var Favorites = sequelize.define('favorites')

  Favorites.associate = function (models) {
  Favorites.belongsTo(models.post, {foreignKey: 'postId', foreignKeyConstraint: true, hooks: true});
  Favorites.belongsTo(models.user, {});
  }

  return Favorites
}
