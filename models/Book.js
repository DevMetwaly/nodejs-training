Sequelize = require("sequelize");
sequelize = require("../util/database");

Rent = require("./Rent")


module.exports = Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

});
