import React from 'react'

interface IH2Text {
    text: string;
}

const H2Text: React.FC<IH2Text> = ({text}) => {
  return (
    <h2 className='text-xl text-center my-4 p-2'>{text}</h2>
  )
}

export default H2Text