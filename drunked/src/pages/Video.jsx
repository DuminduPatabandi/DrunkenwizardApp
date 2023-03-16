import styles from '../style'
import { Sneek } from '../components'


export default function Video() {
  return (
    <section id='work '>
      <div className="bg-[#f9f9f9]">
        <div className="mx-auto max-w-full py-6 px-20 sm:py-14">
          <h2 className={`${styles.paddingNew} font-shadows text-[#23221f] text-[54px] tracking-[19.2px] mt-6 mb-10 text-center`}>Videos</h2>
          <a className="flex text-center bg-white py-4 px-10 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 duration-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" target='_blank' href="https://www.shutterstock.com/g/DbrosVmaker">Videos</a>
        </div>
      </div>

      <Sneek/>
    </section>
  )
}
