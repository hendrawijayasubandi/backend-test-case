const path = require('path');
const { books, members } = require(path.join(__dirname, '../db'));

class BooksService {
    static getAllBooks() {
        return books;
    }

    static borrowBook(memberCode, bookCode) {
        const book = books.find((b) => b.code === bookCode);
        const member = members.find((m) => m.code === memberCode);

        if (book && member && book.stock > 0) {
            book.stock--;
            return true;
        }

        return false;
    }

    static returnBook(memberCode, bookCode) {
        const book = books.find((b) => b.code === bookCode);
        const member = members.find((m) => m.code === memberCode);

        if (book && member) {
            book.stock++;
            return true;
        }

        return false;
    }

    static checkBooks() {
        return books;
    }
}

module.exports = BooksService;
