import {useState} from 'react'
import {close, logo, menu} from '../assets'
import { navLinks } from '../constants'


const Navbar = () => {
  return (
    <nav className='w-full bg-white  py-3.5   navbar'>
      
      <ul className='list-none sm:flex hidden justify-center items-center '>

        {navLinks.map((nav, index) => (
          <li 
            key={nav.id}
            className = {`font-montserrat text-[#838383] cursor-pointer text-[.7rem] mx-6`}>

            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}

      </ul>
    </nav>
  )
}

export default Navbar