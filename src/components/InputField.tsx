import React from 'react'

interface IInputField {
  placeholder: string;
  width: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<IInputField> = ({ placeholder, width, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      className={`h-6 border-2 rounded px-2 py-4 ${width}`}
      onChange={onChange}
    />
  )
}

export default InputField