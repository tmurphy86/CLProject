module.exports = function(sequelize, DataTypes) {
    var Posts = sequelize.define("post", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 45]
            }
        },
        zip: {
            type: DataTypes.STRING,
            allowNull:false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        postbody: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.BIGINT(11),
            allowNull: true
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        obo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            DEFAULT: true
        },
        notifications: {
            type: DataTypes.BOOLEAN,
            DEFAULT: true
        },
        archive: {
            type: DataTypes.BOOLEAN,
            DEFAULT: false
        }
    });

    Posts.associate = function(models) {
        Posts.belongsTo(models.user, {});
        Posts.belongsTo(models.categories, {});
    };

    return Posts;
};
