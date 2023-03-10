import { team } from '../assets'
import styles from '../style'

export default function Example() {
  return (
    <section id='about'>
      <div className="">
        <div className="py-16 px-4 sm:pb-20 sm:pt-8 xl:px-8 ">
          <h2 className={`${styles.paddingNew} font-shadows text-[#23221F] text-[54px]  tracking-[24px] text-center`}>About</h2>
          <div className="grid grid-cols-1  items-center gap-y-10 md:grid-cols-2 sm:gap-10 justify-items-center">
            <img className='w-[500px]  ' src={team} alt="My picture-Taken by Layeshi at A8" />
            <p className='font-montserrat font-thin md:max-lg:px-5 lg:px-3 text-[#838383] leading-[28px]'>The Drunken Wiazrds is a team of dedicated design and web professionals based in Sri Lanka. who come from and specialize in a variety of media and interactive backgrounds. We bring our cross disciplinary experience to each project, taking advantage of emerging technologies and combining the sum (*wink*) of our abilities to deliver successful and innovative solutions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
