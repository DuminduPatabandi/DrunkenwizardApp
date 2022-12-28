import styles from '../style'
import {drunkenwizard_dark} from '../assets'

const Details = () => (
  <section id='home' className={`${styles.paddingY} my-0 sm:my-4 w-full`}>
    <div className='flex flex-col  justify-center items-center '>
    <h1 className="font-maya text-center text-[4rem] text-[#F5F5F5] pt-5 pb-4">WE ARE DRUNKEN WIZARDS</h1>
      {/* <p className='font-shadows text-[#939393] text-[20px] tracking-[4.8px] text-center mt-6'>A PLACE WHERE EVERYTHING REIMAGINED.</p> */}
      <p class="font-Montserrat text-white text-[20px] text-center ">WEB | APPLICATION | BRANDING
                        PRINT | MAGAZINES | 3D-MODELING | ANIMATION | WE DO ALL THE STUFF.
                        JUST RELAX WE GOT THIS.
                        </p>
    </div>
  </section>

)

export default Details