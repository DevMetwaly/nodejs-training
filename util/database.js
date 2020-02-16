model = require("sequelize");


Sequelize = require("sequelize");

const sequelize = new Sequelize("rental_app","root","",{
    dialect: "mysql",
    host: "localhost"
    
})
module.exports = sequelize;