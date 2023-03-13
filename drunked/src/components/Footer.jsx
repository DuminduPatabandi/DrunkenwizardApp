import { navLinks, socialMedia, footerLinks } from '../constants'
import {drunkenwizard_dark} from '../assets'
import { NavLink } from 'react-router-dom'

const Footer = () => (

  <footer class="font-montserrat bg-[#f9f9f9] text-[#838383]">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src={drunkenwizard_dark} alt="site-logo" className='w-[12rem] h-[12rem] cursor-pointer object-contain  ' />
      </a>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium tracking-widest text-[1rem] mb-4">SITE LINKS</h2>
        <nav class="list-none mb-10">
        <ul className='text-gray-600 '>

            {navLinks.map((nav, index) => (
              <li 
                key={nav.id}
                className = {` cursor-pointer  hover:text-[#ed2939] duration-700 text-[.8rem] pb-5 `}>

                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>

              </li>
            ))}

        </ul>
        </nav>
      </div>

      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium tracking-widest text-[1rem] mb-4">OUR SITES</h2>
        <nav class="list-none mb-10">
        <ul className='text-gray-600 hover:text-gray-800'>

            {footerLinks.map((nav, index) => (
              <li 
                key={nav.id}
                className = {` cursor-pointer hover:text-[#ed2939] duration-700 text-[.8rem] pb-5`}>

                <a href={`#${nav.id}`}>
                  {nav.name}
                </a>

              </li>
            ))}
            

        </ul>
        </nav>
      </div>

      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium tracking-widest text-[1rem] mb-4">OUR SITES</h2>
        <nav class="list-none mb-10">
        <ul className='social'>

            {socialMedia.map((nav, index) => (

              <li className=''>
                  <a key={nav.id} href={nav.href}>
                  <img
                    src={nav.icon}
                    className = {` cursor-pointer hover:text-[#ed2939] duration-700 text-black pb-5 `}
                  />
                  </a>

              </li>

            ))}

        </ul>
        </nav>
      </div>

    </div>
  </div>

    <div class="bg-white">
        <div class="container mx-auto text-center py-4 px-5 ">
            <p class="text-gray-500 text-sm ">© 2023 Official DrunkenWizards Website —
                <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@DrunkenWizards</a>
            </p>
            <p class="text-gray-500 text-[.7rem] pt-2">A PRODUCT OF DUMINDU PATABANDI</p>
        
        </div>
    </div>
</footer>

)

export default Footer