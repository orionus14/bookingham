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
                className=''
            />
            <p>{title}</p>
            <p>{author === 'Unknown' ? '' : author}</p>
        </>
    )
}

export default BookItem