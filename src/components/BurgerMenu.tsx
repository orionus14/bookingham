import NavItem from './NavItem';
import React from 'react';

interface IBurgerMenu {
    isVisible: boolean;
}

const BurgerMenu: React.FC<IBurgerMenu> = ({ isVisible }) => {
    return (
        <div
            className={`fixed z-10 h-[calc(100vh-64px)] w-1/2 bg-gradient-to-b from-[#3e3e3e] via-[#343434] to-[#2f2f2f] top-[64px] right-0 px-8 pt-4 border-l-2 border-gray-500 transform transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <ul className="flex flex-col items-end gap-y-2">
                <li>
                    <NavItem to="/books">Books</NavItem>
                </li>
                <li>
                    <NavItem to="/about">About Us</NavItem>
                </li>
                <li>
                    <NavItem to="/contacts">Contacts</NavItem>
                </li>
                <li>
                    <NavItem to="/faq">FAQ</NavItem>
                </li>
            </ul>
        </div>
    );
};

export default BurgerMenu;