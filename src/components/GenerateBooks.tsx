import BookItem from './BookItem'
import books from '../data/books.json'
import { useState } from 'react';
import { Pagination } from '@mui/material';

const GenerateBooks = () => {
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPages = Math.ceil(books.length / itemsPerPage);

    const currentBooks = books.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    }
    return (
        <div className='p-4 pb-12 w-full'>
            <h1 className="text-2xl text-center border-b-2 mb-4 p-2">All Books</h1>
            <ul
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        justify-items-center gap-8 py-8'
            >
                {currentBooks.map((book, index) => (
                    <li
                        key={index}
                        className='h-[520px] w-[280px] border-b-2 border-gray-300'
                    >
                        <BookItem
                            img={book.imageLink}
                            title={book.title}
                            author={book.author}
                        />
                    </li>
                ))}
            </ul>
            <div className='flex justify-center mt-4'>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color='primary'
                    size='large'
                />
            </div>
        </div>
    )
}

export default GenerateBooks