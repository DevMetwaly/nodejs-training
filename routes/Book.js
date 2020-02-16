express = require('express');
bookController = require('../controllers/Book');
isAuth = require("../middleware/is-auth");

router = express.Router();

router.get("/add-book", bookController.getBookControl);
router.post("/book", bookController.postBook);

router.get("/book", bookController.getBooks);

router.post("/book/:id", bookController.editBook);
router.post("/book/delete/:id", bookController.deleteBook);
router.get("/book/:id", bookController.getBook);
router.post("/book/rent/:id", isAuth, bookController.postRentBook);


module.exports = router;