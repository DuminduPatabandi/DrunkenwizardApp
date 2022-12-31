import {useState} from 'react'
import {closing, mymenu} from '../assets'
import { navLinks } from '../constants'
import { PageLinks } from '../constants'


const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className='w-full bg-white py-[1rem]  navbar'>
      
      <ul className='list-none sm:flex hidden justify-center items-center'>

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


      <div className='sm:hidden flex flex-1 justify-end items-center px-4 '>
        <img src={toggle ? closing : mymenu} alt="menu-icon" className='w-[28px] h-[28px] object-contain'
        onClick={() => settoggle((prev) => !prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-white absolute justify-center top-10 right-0 my-2 w-full h-screen sidebar `}>
        <ul className='list-none flex flex-col  justify-center items-center '>

        {navLinks.map((nav, index) => (
          <li 
            key={nav.id}
            className = {`font-montserrat text-[#838383] cursor-pointer font-bold text-[1.5rem] my-6`}>

            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}

      </ul>

        </div>
      </div>

    </nav>
  )
}

export default Navbar