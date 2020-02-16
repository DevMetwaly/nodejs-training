Sequelize = require("sequelize");
sequelize = require("../util/database");

Rent = require("./Rent")


module.exports = User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    privilege: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }
});
