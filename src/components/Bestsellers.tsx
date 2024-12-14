import { Link } from 'react-router-dom';
import books from '../data/books.json'
import BookItem from './BookItem';

const Bestsellers = () => {

  const sortedBooks = [...books].sort((a, b) => b.rating - a.rating);
  const topBooks = sortedBooks.slice(0, 6);

  return (
    <section className='mt-2'>
      <h1 className='text-center text-white font-semibold text-3xl py-6 bg-[linear-gradient(90deg,_#182848_0%,_#4b6cb7_100%)]'>Bestsellers</h1>
      <hr />
      <ul
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        justify-items-center gap-8 p-8'
      >
        {topBooks.map(book => (
          <li
            key={book.id}
            className='h-[520px] w-[280px] border-b-2 border-gray-300'>
            <Link to={`/books/${book.id}`}>
              <BookItem
                img={book.imageLink}
                title={book.title}
                author={book.author}
                price={book.price}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Bestsellers