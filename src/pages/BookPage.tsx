import { useParams } from "react-router";
import books from '../data/books.json'
import Rating from "../components/Rating";

const BookPage = () => {
  const { id } = useParams<{ id: string }>();
  const book = books.find((b) => b.id.toString() === id);

  if (!book) {
    return (
      <div className="h-[calc(100vh-64px)] text-center text-xl text-gray-500">
        Book not found :(
      </div>
    );
  }

  return (
    <>
      <div className="p-4 max-w-4xl mx-auto border-b-2">
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
        <div className="flex gap-8">
          <img
            src={`/${book.imageLink}`}
            alt={book.title}
            className="w-2/5 rounded shadow-lg"
          />
          <div>
            <Rating rating={book.rating} ratingAmount={book.ratingAmount} title={book.title} />
            <p className="text-xl">
              <strong>Author:</strong> {book.author}
            </p>
            <p className="text-xl">
              <strong>Language:</strong> {book.language}
            </p>
            <p className="text-xl">
              <strong>Pages:</strong> {book.pages}
            </p>
            <p className="text-xl">
              <strong>Price:</strong> ${book.price}
            </p>
          </div>
        </div>
      </div>
      <div className="text-xl text-center p-4">
        Reviews
      </div>
    </>
  )
}

export default BookPage