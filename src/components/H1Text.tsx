import React from 'react'

interface IH1Text {
    text: string;
}

const H1Text: React.FC<IH1Text> = ({text}) => {
  return (
    <h1 className='text-3xl text-center font-bold p-4'>{text}</h1>
  )
}

export default H1Text
