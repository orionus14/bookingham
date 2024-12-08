import React from 'react'

interface IInputField {
  placeholder: string;
  width: string
}

const InputField: React.FC<IInputField> = ({ placeholder, width }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`h-6 border-2 rounded px-2 py-4 ${width}`}
    />
  )
}

export default InputField
