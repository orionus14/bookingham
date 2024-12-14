import HoverText from './HoverText'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-[linear-gradient(135deg,_#1e2a47_0%,_#5e3a8c_100%)] border-t-8 border-purple-700 px-16 py-8 '>
      <div className='flex flex-col sm:flex-row flex-wrap justify-center'>
        <div className='mx-10'>
          <h3 className='text-white text-xl underline my-2'>About Us</h3>
          <ul className='mx-4 sm:mx-0 flex flex-col gap-y-2'>
            <li>
              <HoverText to='/contract'>Public contract (offer)</HoverText>
            </li>
            <li>
              <HoverText to='/bookstores'>Bookstores</HoverText>
            </li>
            <li>
              <HoverText to='/bookclub'>Book Club</HoverText>
            </li>
            <li>
              <HoverText to='/partners'>Partners</HoverText>
            </li>
            <li>
              <HoverText to='/cooperation'>Cooperation</HoverText>
            </li>
          </ul>
        </div>
        <div className='mx-10'>
          <h3 className='text-white text-xl underline my-2'>Help</h3>
          <ul className='mx-4 sm:mx-0 flex flex-col gap-y-2'>
            <li>
              <HoverText to='/contacts'>Contacts</HoverText>
            </li>
            <li>
              <HoverText to='/refund'>Refund</HoverText>
            </li>
            <li>
              <HoverText to='/delivery'>Delivery</HoverText>
            </li>
          </ul>
        </div>
      </div>
      <div className='logo mt-4 mb-8'>
        <h1 className='text-3xl text-white text-center mb-2'>Bookingham</h1>
        <div className='flex space-x-2 justify-center'>
          <a href="https://www.facebook.com/">
            <Facebook color='#ffffff' className='hover:opacity-80 transition' />
          </a>
          <a href="https://www.instagram.com/">
            <Instagram color='#ffffff' className='hover:opacity-80 transition' />
          </a>
          <a href="https://www.linkedin.com/">
            <Linkedin color='#ffffff' className='hover:opacity-80 transition' />
          </a>
        </div>
      </div>
      <div className='text-white text-xs text-center'>
        &copy; 2024 All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer