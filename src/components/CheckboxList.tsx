import React, { useState } from 'react'

interface ICheckboxList {
    categories: string[];
    name: string;
}

const CheckboxList: React.FC<ICheckboxList> = ({ categories, name }) => {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <ul>
                {categories.slice(0, isExpanded ? categories.length : 5)
                    .map((category, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                name={name}
                                id={category}
                                className='mr-2'
                            />
                            <label htmlFor={category}>{category}</label>
                        </li>
                    ))}
            </ul>
            {categories.length > 5 && (
                <button
                    className='mt-2 text-blue-500 hover:underline'
                    onClick={toggleExpand}
                >
                    {isExpanded ? 'Show Less' : 'Show More'}
                </button>
            )}
        </>
    )
}

export default CheckboxList