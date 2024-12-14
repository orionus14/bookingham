import { MoveUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const ToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 z-10 p-2 bg-blue-600 text-white rounded-full shadow-lg transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            style={{
                pointerEvents: isVisible ? 'auto' : 'none'
            }}
        >
            <MoveUp />
        </button>
    );
};

export default ToTopButton;