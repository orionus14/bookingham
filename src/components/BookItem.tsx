import React from 'react'

interface IBookItem {
    img: string;
    title: string;
    author: string;
    price: number;
    oldPrice?: string | number;
}

const BookItem: React.FC<IBookItem> = ({ img, title, author, price, oldPrice }) => {
    const isDiscounted = typeof oldPrice === 'number';

    return (
        <div className='h-full relative'>
            <img
                src={`/${img}`}
                alt={title}
                className='w-full h-[80%] object-cover shadow-gray-500'
            />
            {isDiscounted &&
                <div className='rounded-full absolute top-2 right-2 bg-red-500 text-white text-xl font-bold p-4 w-14 h-14 flex items-center justify-center'>
                    -{Math.round((1 - price / oldPrice) * 100)}%
                </div>
            }

            <div className='flex flex-col'>
                {isDiscounted ? (
                    <p className='text-red-500 text-lg'>
                        <span className='text-gray-400 text-base line-through mr-2'>&#36;{oldPrice.toFixed(2)}</span>
                        &#36;{price.toFixed(2)}
                    </p>
                ) : (
                    <p>&#36;{price.toFixed(2)}</p>
                )}
                <p className='text-xl my-2 overflow-hidden text-ellipsis text-nowrap hover:opacity-80 transition duration-200'>{title}</p>
                <p className='text-gray-500 hover:opacity-80 transition duration-200'>{author === 'Unknown' ? '' : author}</p>
            </div>
        </div>
    )
}

export default BookItem