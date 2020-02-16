Book = require("../models/Book");
exports.postBook = (req, res, next) => {
    Book
        .create({
            title: req.body.book_title,
            description: req.body.description,
            quantity: req.body.quantity,
        })
        .then(result => res.redirect('/book'))
        .catch(err => console.log(err))

};
exports.getBooks = (req, res, next) => {
    Book
        .findAll()
        .then(books => {
            res.render("books/books", {
                books: books
            });
        })
        .catch(res => console.log(err))


};
exports.getBookControl = (req, res, next) => {
    res.render("books/books-control");
};

exports.postRentBook = (req, res, next) => {
    if (!req.User)
        res.redirect("/sign-in")

    Book
        .findByPk(req.params.id)
        .then(book => {
            if (book.quantity != 0) {
                console.log(req.User)
                req.User.addBook(book, { through: { duration: 10 } });
                book.quantity -= 1;
                book
                    .save()
                    .then(result => {
                        res.redirect("/book/" + req.params.id);
                    });
            }
            else res.redirect("/");
        })
        .catch(err => console.log(err))


}

exports.getBook = (req, res, next) => {
    Book
        .findByPk(req.params.id)
        .then(book => {
            res.render('books/book', {
                book: book
            })
        })
        .catch(err => console.log(err));

}
exports.editBook = (req, res, next) => {
    Book
        .findByPk(req.params.id)
        .then(book => {
            book.title = req.body.book_title;
            book.description = req.body.description;
            book.quantity = req.body.quantity;
            book.save()
        })
        .then(result => {
            res.redirect("/book/" + req.params.id);
        })
        .catch(err => console.log(err))
}

exports.deleteBook = (req, res, next) => {
    Book
        .findByPk(req.params.id)
        .then(book => {
            book
                .destroy()
                .then(result => res.redirect('/'))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}