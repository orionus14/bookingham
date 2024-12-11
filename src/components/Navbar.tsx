import { Link, useLocation } from 'react-router-dom'
import NavItem from './NavItem'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import BurgerMenu from './BurgerMenu'

const Navbar = () => {
    const navClass = 'flex justify-between items-center h-16 bg-black text-white px-16 fixed z-10 w-screen'
    const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false);
    const location = useLocation();
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowBurgerMenu(false);
            }
        };

        if (showBurgerMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showBurgerMenu]);

    useEffect(() => {
        setShowBurgerMenu(false);
    }, [location]);

    useEffect(() => {
        if (showBurgerMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [showBurgerMenu]);

    return (
        <header className="h-16">
            <nav className={navClass} >
                <div className="text-xl">
                    <Link to='/'>Bookingham</Link>
                </div>
                <div className="hidden sm:flex space-x-4">
                    <li>
                        <NavItem to='/books'>Books</NavItem>
                    </li>
                    <li>
                        <NavItem to='/about'>About Us</NavItem>
                    </li>
                    <li>
                        <NavItem to='/contacts'>Contacts</NavItem>
                    </li>
                    <li>
                        <NavItem to='/faq'>FAQ</NavItem>
                    </li>
                </div>
                <div className='flex sm:hidden'>
                    {showBurgerMenu ? (
                        <div ref={menuRef} className="relative">
                            <X size={32} onClick={() => setShowBurgerMenu(false)} />
                            <BurgerMenu />
                        </div>
                    ) : (
                        <Menu size={32} onClick={() => setShowBurgerMenu(true)} />
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar