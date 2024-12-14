import BookItem from './BookItem'
import books from '../data/books.json'
import { useEffect, useMemo, useState } from 'react';
import { Pagination } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import DropdownMenu from './DropdownMenu';
import { Link } from 'react-router';
import { Filter as FilterIcon } from 'lucide-react';
import Filter from './Filter';

const GenerateBooks = () => {
    const filters = useSelector((state: RootState) => state.filters);

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [sortOption, setSortOption] = useState<string | null>(null);
    const [filterMenu, setFilterMenu] = useState<boolean>(false);

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

            const matchesDiscount = filters.hasDiscount
                ? typeof book.oldPrice === 'number'
                : true;

            return matchesName && matchesPrice && matchesLanguage && matchesPages && matchesDiscount;
        });
    }, [filters]);

    const sortedBooks = useMemo(() => {
        const sorted = [...filteredBooks];

        switch (sortOption) {
            case 'Rating':
                return sorted.sort((a, b) => b.rating - a.rating);
            case 'From A to Z':
                return sorted.sort((a, b) => a.title.localeCompare(b.title));
            case 'From Z to A':
                return sorted.sort((a, b) => b.title.localeCompare(a.title));
            case 'Ascending Price':
                return sorted.sort((a, b) => a.price - b.price);
            case 'Descending Price':
                return sorted.sort((a, b) => b.price - a.price);
            case 'Ascending Page':
                return sorted.sort((a, b) => a.pages - b.pages);
            case 'Descending Page':
                return sorted.sort((a, b) => b.pages - a.pages);
            default:
                return filteredBooks;
        }
    }, [filteredBooks, sortOption]);

    const currentBooks = useMemo(() => {
        return sortedBooks.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );
    }, [sortedBooks, currentPage]);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    }

    const resetPageToOne = () => {
        setCurrentPage(1);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <div className='p-4 pb-12 w-full relative'>
            <h1 className="text-2xl text-center border-b-2 mb-4 p-2">All Books</h1>

            <div className='flex justify-between items-center'>
                <div
                    className='cursor-pointer sm:hidden'
                    onClick={() => setFilterMenu(true)}
                >
                    <FilterIcon size={32} />
                </div>

                <div className='flex justify-end sm:justify-start'>
                    <DropdownMenu onSortChange={setSortOption} onResetPage={resetPageToOne} />
                </div>
            </div>

            {filterMenu && (
                <div className='absolute top-0 left-0 z-10 bg-white p-4 shadow-lg h-full'>
                    <Filter setFilterMenu={setFilterMenu} />
                </div>
            )}

            {filteredBooks.length === 0 ? (
                <div className="text-center text-xl text-gray-500">
                    No books were found that match your search :(
                </div>
            ) : (
                <>
                    <div className='flex justify-center mt-4'>
                        <Pagination
                            count={Math.ceil(filteredBooks.length / itemsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                            color='primary'
                            size='large'
                        />
                    </div>
                    <ul
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                        justify-items-center gap-8 py-8'
                    >
                        {currentBooks.map(book => (
                            <li
                                key={book.id}
                                className='h-128 w-64 border-b-2 border-gray-300'
                            >
                                <Link to={`/books/${book.id}`}>
                                    <BookItem
                                        img={book.imageLink}
                                        title={book.title}
                                        author={book.author}
                                        price={book.price}
                                        oldPrice={book.oldPrice}
                                    />
                                </Link>
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