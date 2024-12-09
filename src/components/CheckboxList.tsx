import React, { useState } from 'react';

interface ICheckboxList {
    categories: string[];
    name: string;
    selectedValues: string[];
    onChange: (selected: string[]) => void;
  }
  

const CheckboxList: React.FC<ICheckboxList> = ({
  categories,
  name,
  selectedValues,
  onChange,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCheckboxChange = (category: string) => {
    const updatedValues = selectedValues.includes(category)
      ? selectedValues.filter(item => item !== category)
      : [...selectedValues, category]; 

    onChange(updatedValues);
  };

  return (
    <>
      <ul>
        {categories
          .slice(0, isExpanded ? categories.length : 5)
          .map((category, index) => (
            <li key={index}>
              <input
                type="checkbox"
                name={name}
                id={category}
                className="mr-2"
                checked={selectedValues.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              <label htmlFor={category}>{category}</label>
            </li>
          ))}
      </ul>
      {categories.length > 5 && (
        <button
          className="mt-2 text-blue-500 hover:underline"
          onClick={toggleExpand}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </>
  );
};

export default CheckboxList;