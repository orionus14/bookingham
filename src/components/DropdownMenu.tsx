import React from 'react';
import { MoveDown } from 'lucide-react';
import { useState } from 'react'

interface IDropdownMenu {
    onSortChange: (sortOption: string) => void;
}

const DropdownMenu: React.FC<IDropdownMenu> = ({ onSortChange }) => {

    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

    const handleOptionClick = (option: string) => {
        onSortChange(option);
        setDropdownMenu(false);
    };

    return (
        <>
            <div
                className='inline-flex justify-center items-center text-xl 
                relative cursor-pointer px-4 py-2 border w-44'
                onClick={() => setDropdownMenu(!dropdownMenu)}
            >
                Sort By <div className={`${dropdownMenu ? 'rotate-180' : ''}`}>
                    <MoveDown size={16} />
                </div>
            </div>
            {dropdownMenu && (
                <div className="absolute bg-white p-2 w-44 border shadow-md">
                    <div
                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleOptionClick('Default')}
                    >
                        Default
                    </div>
                    <div className="border-t my-1"></div>
                    <div
                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleOptionClick('From A to Z')}
                    >
                        From A to Z
                    </div>
                    <div className="border-t my-1"></div>
                    <div
                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleOptionClick('From Z to A')}
                    >
                        From Z to A
                    </div>
                    <div className="border-t my-1"></div>
                    <div
                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleOptionClick('Rating')}
                    >
                        Rating
                    </div>
                    <div className="border-t my-1"></div>
                    <div
                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleOptionClick('Ascending Price')}
                    >
                        Ascending Price
                    </div>
                    <div className="border-t my-1"></div>
                    <div
                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleOptionClick('Descending Price')}
                    >
                        Descending Price
                    </div>
                    <div className="border-t my-1"></div>
                    <div
                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleOptionClick('Ascending Page')}
                    >
                        Ascending Page
                    </div>
                    <div className="border-t my-1"></div>
                    <div
                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleOptionClick('Descending Page')}
                    >
                        Descending Page
                    </div>
                </div>
            )}

        </>
    )
}

export default DropdownMenu