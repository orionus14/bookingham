import React from 'react'
import { Link } from 'react-router-dom'

interface IHoverText {
    to: string;
    children: React.ReactNode
}

const HoverText: React.FC<IHoverText> = ({ to, children }) => {
    return (
        <Link
            to={to}
            className='text-white hover:text-gray-300 transition duration-200'
        >
            {children}
        </Link>
    )
}

export default HoverText