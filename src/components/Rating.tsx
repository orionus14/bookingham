import { Button } from '@mui/material';
import { Star } from 'lucide-react';
import React, { useEffect, useState } from 'react'

interface IRating {
    rating: number;
    ratingAmount: number;
    title: string
}

const Rating: React.FC<IRating> = ({ rating, ratingAmount, title }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [mark, setMark] = useState<number | null>(null);
    const [hovered, setHovered] = useState<number | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleStarClick = (value: number) => {
        setMark(value);
    };

    const handleMouseEnter = (index: number) => {
        setHovered(index);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    useEffect(() => {
        setMark(null);
        setHovered(null);
    }, [isMenuOpen])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <>

            <div
                className='inline-flex items-center hover:bg-gray-100 transition rounded-md p-1 cursor-pointer'
                onClick={toggleMenu}
            >
                <div className='mr-1'><Star fill='#3b82f6' color='#3b82f6' /></div>
                <div>
                    <p><strong className='text-lg'>{rating}</strong>/5</p>
                    <p className='text-xs'>{ratingAmount}</p>
                </div>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded shadow-lg w-1/2 text-center">
                        {mark === null ? (
                            <p className="mb-2">Rate the book</p>
                        ) : (
                            <p className="mb-2">Your Rating: <strong>{mark}</strong>/5</p>
                        )}
                        <p className='mb-4 text-xl font-semibold'>{title}</p>

                        <div className='flex justify-center mb-8'>
                            {[1, 2, 3, 4, 5].map(index => (
                                <div
                                    key={index}
                                    className='cursor-pointer mx-1'
                                    onClick={() => handleStarClick(index)}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Star fill={index <= (hovered ?? mark ?? 0) ? '#3b82f6' : '#ffffff'} color='#3b82f6' />
                                </div>
                            ))}
                        </div>

                        <div className='flex gap-8 justify-center'>
                            <Button color="primary" onClick={toggleMenu}>Close</Button>
                            <Button variant="contained" color="primary" onClick={toggleMenu}>Rate</Button>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Rating