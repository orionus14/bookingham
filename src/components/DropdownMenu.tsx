import React from 'react';
import { MoveDown } from 'lucide-react';
import { useState } from 'react'

interface IDropdownMenu {
    onSortChange: (sortOption: string) => void;
    onResetPage: () => void;
}

const DropdownMenu: React.FC<IDropdownMenu> = ({ onSortChange, onResetPage }) => {

    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

    const handleOptionClick = (option: string) => {
        if (option === 'Default') {
            onResetPage();
        }
        onSortChange(option);
        setDropdownMenu(false);
    };

    return (
        <>
            <div
                className='inline-flex justify-center items-center text-xl 
                relative cursor-pointer px-4 py-2 border w-44 hover:bg-gray-100'
                onClick={() => setDropdownMenu(!dropdownMenu)}
            >
                <div className='flex items-center'>
                    <p className='mr-2'>Sort</p>
                    <div className={`transform transition-transform duration-200 ${dropdownMenu ? "rotate-180" : "rotate-0"}`}>
                        <MoveDown size={16} />
                    </div>
                </div>
                {dropdownMenu && (
                    <div className="absolute top-12 z-10 bg-white p-2 w-44 border shadow-md ">
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
            </div>
        </>
    )
}

export default DropdownMenu