let exp = require('express');
let router = exp.Router();
let booksController = require('../controller/books-controller');

router.get('/books', booksController.books_get);
router.get('/book/:id', booksController.get_book_by_id);
router.get('/book/:id/:author', booksController.get_book);
router.post('/book', booksController.books_post);
router.delete('/book/:id', booksController.delete_book);

module.exports = router;