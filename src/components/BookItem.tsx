import React from 'react'
import { Link } from 'react-router-dom';

interface IBookItem {
    id: string;
    img: string;
    title: string;
    author: string;
    price: number;
}

const BookItem: React.FC<IBookItem> = ({ img, title, author, price }) => {
    return (
        <>
            <img
                src={`/${img}`}
                alt={title}
                className='w-full h-[80%] object-cover shadow-gray-500'
            />
            <p>&#x24;{price}</p>
            <p className='text-xl my-2'>{title}</p>
            <p className='text-gray-500'>{author === 'Unknown' ? '' : author}</p>
        </>
    )
}

export default BookItem