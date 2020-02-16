Sequelize = require("sequelize");
sequelize = require("../util/database");

module.exports = rent = sequelize.define('rent', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});
