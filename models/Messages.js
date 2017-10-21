module.exports = function(sequelize, DataTypes) {
    var Messages = sequelize.define("messages", {
        messageVal: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        senderName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        senderId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        receiverName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        receiverId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postId: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
return Messages;
};
