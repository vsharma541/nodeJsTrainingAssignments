let Books = require('../models/Books');

let books_post = async (req, resp, next) => {
    console.log(req.body);
    try {
        let book = await Books.create(req.body);
        resp.status(200).send(book);
    } catch (error) {
        next(error);
    }
}

let books_get = async (req, resp, next) => {
    try {
        let books = await Books.find();
        resp.status(200).send(books);
    } catch (error) {
        next(error);
    }
}

let get_book = async (req, resp, next) => {
    try {
        console.log(req.params);
        let book = await Books.findById(req.params.id);
        if(!book) {
            resp.status(404).send('Book not found');
            return;
        }
        if(!(book.author === req.params.author)) {
            resp.status(400).send('Book author not matching');
            return;
        }
        resp.status(200).send(book);
    } catch (error) {
        // console.log(error);
        next(error)
    }
}

let get_book_by_id = async (req, resp, next) => {
    try {
        console.log(req.params);
        let book = await Books.findById(req.params.id);
        if(!book) {
            resp.status(404).send('Book not found');
            return;
        }
        resp.status(200).send(book);
    } catch (error) {
        // console.log(error);
        next(error)
    }
}

let delete_book = async (req, resp, next) => {
    try {
        let bookDel = await Books.findByIdAndRemove(req.params.id);
        resp.status(200).send(bookDel);
    } catch (error) {
        next(error);
    }
}
module.exports = {books_post, books_get, get_book, delete_book, get_book_by_id};