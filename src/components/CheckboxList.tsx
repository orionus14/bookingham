import React from 'react'

interface ICheckboxList {
    categories: string[];
    name: string;
}

const CheckboxList: React.FC<ICheckboxList> = ({ categories, name }) => {
    return (
        <ul>
            {categories.map((category, index) => (
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
    )
}

export default CheckboxList
