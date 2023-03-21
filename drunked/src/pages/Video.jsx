import styles from '../style'
import { Sneek } from '../components'


export default function Video() {
  return (
    <section id='work '>
      <div className="bg-[#f9f9f9] -z-10">
        <div className="mx-auto max-w-full py-6 px-16 sm:py-14">
          <h2 className={`${styles.paddingNew} font-shadows text-[#23221f] text-[54px] tracking-[19.2px] mt-6 text-center`}>Videos</h2>
        </div>
        <div className="flex justify-center">
          <a className=" text-center bg-[#c6d7eb] py-[14px] px-16 text-[1rem] mt-5 mb-[12rem] tracking-wide text-white hover:bg-white hover:text-[#23221f] duration-500" target='_blank' href="https://www.shutterstock.com/g/DbrosVmaker">Watch My Videos
          </a>
        </div>
      </div>

      <Sneek/>
    </section>
  )
}
