const express = require('express');
const router = express.Router();
const BooksService = require('../services/books.service');

// Routes for books

// GET all books
router.get('/', (req, res) => {
    const allBooks = BooksService.getAllBooks();
    res.json(allBooks);
});

// POST borrow a book
router.post('/borrow/:memberCode/:bookCode', (req, res) => {
    const { memberCode, bookCode } = req.params;
    const success = BooksService.borrowBook(memberCode, bookCode);

    if (success) {
        res.send('Book borrowed successfully');
    } else {
        res.status(400).send('Unable to borrow the book');
    }
});

// POST return a book
router.post('/return/:memberCode/:bookCode', (req, res) => {
    const { memberCode, bookCode } = req.params;
    const success = BooksService.returnBook(memberCode, bookCode);

    if (success) {
        res.send('Book returned successfully');
    } else {
        res.status(400).send('Unable to return the book');
    }
});

// GET check all books
router.get('/check', (req, res) => {
    const checkedBooks = BooksService.checkBooks();
    res.json(checkedBooks);
});

module.exports = router;
