import fs from 'fs';

function getRandomRating(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

function getRandomRatingAmount(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateBooksWithRatings() {
  fs.readFile('books.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    try {
      const books = JSON.parse(data);

      const updatedBooks = books.map(book => ({
        ...book,
        rating: parseFloat(getRandomRating(1, 5)),
        ratingAmount: getRandomRatingAmount(100, 5000)
      }));

      fs.writeFile('books.json', JSON.stringify(updatedBooks, null, 2), err => {
        if (err) {
          console.error('Error writing the file:', err);
        } else {
          console.log('File successfully updated with ratings!');
        }
      });
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  });
}

updateBooksWithRatings();