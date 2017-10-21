module.exports = function(sequelize, DataTypes) {
    var Favorites = sequelize.define("favorites", {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postId: {
          type: DataTypes.STRING,
          allowNull: false,
        }
    });
return Favorites;
};
