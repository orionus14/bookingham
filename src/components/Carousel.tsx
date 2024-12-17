import { MoveLeft, MoveRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

interface CarouselItem {
    src: string;
    text: string;
    to: string;
}

interface ICarousel {
    images: CarouselItem[];
}

const Carousel: React.FC<ICarousel> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [userInteracted, setUserInteracted] = useState<boolean>(false)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!userInteracted) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [userInteracted, images.length]);

    return (
        <div className="relative z-0 w-full h-[calc(100vh-64px)] mx-auto p-2">
            <div className="overflow-hidden h-full">
                <div
                    className="h-full flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 relative">
                            <img
                                src={image.src}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-contain"
                            />
                            <Link
                                to={image.to}
                                className='absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white text-gray-600 transition duration-300 border-2 border-gray-400 hover:bg-gray-200 rounded font-semibold'
                            >
                                <div className='flex p-3'>
                                    <span className='mr-2'>{image.text}</span> <MoveRight />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>


            <button
                onClick={() => {
                    handlePrev();
                    setUserInteracted(true);
                }}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:opacity-85"
            >
                <MoveLeft />
            </button>
            <button
                onClick={() => {
                    handleNext();
                    setUserInteracted(true);
                }}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:opacity-85"
            >
                <MoveRight />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            handleDotClick(index);
                            setUserInteracted(true);
                        }}
                        className={`w-3 h-3 rounded-full border-2 border-transparent 
                            ${currentIndex === index ? 'bg-blue-500' : 'bg-white bg-opacity-50'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;