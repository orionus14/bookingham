import NavItem from './NavItem'

const BurgerMenu = () => {
    return (
        <div className='fixed z-10 h-[calc(100vh-64px)] w-1/2 bg-black top-[64px] right-0 pl-8 pr-16'>
            <ul className='flex flex-col items-end'>
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
            </ul>
        </div>
    )
}

export default BurgerMenu