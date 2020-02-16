Book = require("./Book");
User = require("./User")

module.exports = () => {
    //
    User.belongsToMany(Book, { through: Rent });
    Book.belongsToMany(User, { through: Rent });
    
    //
    User.hasMany(Rent)
    Rent.belongsTo(Book)
    Book.hasMany(Rent)
}