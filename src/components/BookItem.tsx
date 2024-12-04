import React from 'react'

interface IBookItem {
    img: string;
    title: string;
    author: string
}

const BookItem: React.FC<IBookItem> = ({ img, title, author }) => {
    return (
        <>
            <img
                src={`/${img}`}
                alt={title}
                className='w-full h-[80%] object-cover shadow-gray-500'
            />
            <p className='text-xl my-4'>{title}</p>
            <p className='text-gray-500'>{author === 'Unknown' ? '' : author}</p>
        </>
    )
}

export default BookItem