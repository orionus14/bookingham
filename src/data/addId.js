import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const rawData = fs.readFileSync('books.json', 'utf-8');
const books = JSON.parse(rawData);

const booksWithId = books.map(book => ({
  ...book,
  id: uuidv4()
}));

fs.writeFileSync('books.json', JSON.stringify(booksWithId, null, 2), 'utf-8');