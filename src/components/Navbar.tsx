import { Link } from 'react-router-dom'
import NavItem from './NavItem'

const Navbar = () => {
    const navClass = 'flex justify-between items-center h-16 bg-black text-white px-16'

    return (
        <header>
            <nav className={navClass} >
                <div className="text-xl">
                    <Link to='/'>Bookingham</Link>
                </div>
                <div className="flex space-x-4">
                    <li>
                        <NavItem to='/books'>Books</NavItem>
                    </li>
                    <li>
                        <NavItem to='/about'>About Us</NavItem>
                    </li>
                    <li>
                        <NavItem to='/contacts'>Contacts</NavItem>
                    </li>
                    <li>
                        <NavItem to='/faq'>FAQ</NavItem>
                    </li>
                </div>
            </nav>
        </header>
    )
}

export default Navbar