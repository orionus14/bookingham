import fs from 'fs';

const books = JSON.parse(fs.readFileSync('books.json', 'utf-8'));

const addOldPriceToBooks = (books) => {
    books.forEach((book, index) => {
        if ((index + 1) % 5 === 0) {
            const percentageIncrease = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
            const oldPrice = parseFloat((book.price * (1 + percentageIncrease / 100)).toFixed(2));
            book.oldPrice = oldPrice;
        } else {
            book.oldPrice = 'none';
        }
    });

    return books;
};

const updatedBooks = addOldPriceToBooks(books);

fs.writeFileSync('books.json', JSON.stringify(updatedBooks, null, 2), 'utf-8');

console.log('books.json оновлено!');