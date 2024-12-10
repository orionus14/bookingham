import { MoveLeft, MoveRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface ICarousel {
    images: string[]
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
        <div className="relative w-full h-[calc(100vh-64px)] mx-auto">
            <div className="overflow-hidden h-full">
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-cover"
                            />
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
                        className={`w-3 h-3 rounded-full bg-white border-2 border-transparent ${currentIndex === index ? 'bg-blue-500' : 'bg-opacity-50'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;