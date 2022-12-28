import styles from '../style'
import {drunkenwizard_dark} from '../assets'

const Home = () => (
  <section id='home' className={`bg-[#F9F9F9]  ${styles.paddingY} my-0 sm:my-4 `}>
    <div className='flex flex-col  justify-center items-center '>
      <img src={drunkenwizard_dark} alt="site-logo" className='w-[27rem] h-[27rem] object-contain mt-32  sm:mt-10 ' />
      <p className='font-shadows text-[#939393] text-[20px] tracking-[4.8px] text-center mt-6'>A PLACE WHERE EVERYTHING REIMAGINED.</p>
    </div>
  </section>

  )

export default Home