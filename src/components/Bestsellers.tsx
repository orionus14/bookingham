import books from '../data/books.json'
import BookItem from './BookItem';

const Bestsellers = () => {

  const sortedBooks = [...books].sort((a, b) => b.rating - a.rating);
  const topBooks = sortedBooks.slice(0, 6);

  return (
    <section className='px-8'>
      <h1 className='text-center text-3xl py-6'>Bestsellers</h1>
      <hr />
      <ul
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        justify-items-center gap-8 py-8'
      >
        {topBooks.map((book, index) => (
          <li className='h-[520px] w-[280px] border-b-2 border-gray-300'>
            <BookItem
              key={index}
              img={book.imageLink}
              title={book.title}
              author={book.author}
              price={book.price}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Bestsellers