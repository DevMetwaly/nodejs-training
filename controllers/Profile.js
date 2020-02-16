User = require("../models/User");

exports.getProfile = (req, res, next) => {
    req.User
        .getRents({ include: ['book'] })
        .then(Rents => {
            res.render('books/rents', {
                books: Rents.map(rent=>rent.book)
            })
        })
        .catch(err => console.log(err))
}