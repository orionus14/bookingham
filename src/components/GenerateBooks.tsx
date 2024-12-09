import BookItem from './BookItem'
import books from '../data/books.json'
import { useMemo, useState } from 'react';
import { Pagination } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const GenerateBooks = () => {
    const filters = useSelector((state: RootState) => state.filters);
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState<number>(1);

    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            const matchesName = filters.bookName
                ? book.title.toLowerCase().includes(filters.bookName.toLowerCase())
                || book.author.toLowerCase().includes(filters.bookName.toLowerCase())
                && book.author.toLowerCase() !== 'unknown'
                : true;

            const matchesPrice =
                filters.minPrice || filters.maxPrice
                    ? (Number(filters.minPrice) <= Number(book.price || 0)) &&
                    (Number(book.price || 0) <= Number(filters.maxPrice || Infinity))
                    : true;

            const matchesLanguage = filters.chosenLanguage.length
                ? filters.chosenLanguage.includes(book.language)
                : true;

            const matchesPages = filters.pageAmount.length
                ? filters.pageAmount.some((range) => {
                    const [min, max] = range.split(' - ').map(Number);
                    const pages = Number(book.pages);

                    if (max === undefined) {
                        return pages >= 600;
                    }
                    return pages >= min && pages <= max;
                })
                : true;

            return matchesName && matchesPrice && matchesLanguage && matchesPages;
        });
    }, [filters]);

    const currentBooks = useMemo(() => {
        return filteredBooks.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );
    }, [filteredBooks, currentPage]);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    }
    return (
        <div className='p-4 pb-12 w-full'>
            <h1 className="text-2xl text-center border-b-2 mb-4 p-2">All Books</h1>

            {filteredBooks.length === 0 ? (
                <div className="text-center text-xl text-gray-500">
                    No books were found that match your search :(
                </div>
            ) : (
                <>
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
                            count={Math.ceil(filteredBooks.length / itemsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                            color='primary'
                            size='large'
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default GenerateBooks