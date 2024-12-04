import books from '../data/books.json'
import BookItem from './BookItem';

const Bestsellers = () => {

  const sortedBooks = [...books].sort((a, b) => b.rating - a.rating);
  const topBooks = sortedBooks.slice(0, 6);

  return (
    <section className='px-8'>
      <h1 className='text-center text-2xl py-6'>Bestsellers</h1>
      <hr />
      <ul className='grid grid-cols-3 gap-6 py-8'>
        {topBooks.map((book, index) => (
          <li className=''>
            <BookItem
              key={index}
              img={book.imageLink}
              title={book.title}
              author={book.author}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Bestsellers