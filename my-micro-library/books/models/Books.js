let monguz = require('mongoose');
let BooksSchema = new monguz.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    totalPages: {
        type: Number
    }
});
let books = monguz.model('book', BooksSchema);
module.exports = books;