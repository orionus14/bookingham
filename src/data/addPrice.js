import fs from 'fs';

const books = JSON.parse(fs.readFileSync('./books.json', 'utf-8'));

const generateRandomPrice = () => {
    const basePrice = Math.floor(Math.random() * (30 - 7 + 1)) + 7;
    return basePrice - 0.01; 
};

const addPricesToBooks = (books) => {
    return books.map(book => ({
        ...book,
        price: generateRandomPrice(),
    }));
};

const updatedBooks = addPricesToBooks(books);

fs.writeFileSync('./books.json', JSON.stringify(updatedBooks, null, 2), 'utf-8');