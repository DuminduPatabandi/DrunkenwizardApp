import styles from '../style'
import {Home, Details, About, Work, Newsletter, SneekPeak} from '../components'

const App = () => {
  return (

        <div className=''>

                <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#F9F9F9] py-3 w-full`}>
                  <div className={`${styles.boxWidth}`}>
                  <Home />
                  </div>
                </div>
                <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#23221F] py-20 w-full`}>
                  <div className={`${styles.boxWidth}`}>
                  <Details />
                  </div>
                </div>
                <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#e2e2e2] w-full`}>
                  <div className={`${styles.boxWidth}`}>
                  <About />
                  </div>
                </div>
                <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#F9F9F9] w-full`}>
                  <div className={`${styles.boxWidth}`}>
                  <Work />
                  </div>
                </div>
                <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#23221f] sm:py-16 py-6 w-full`}>
                  <div className={`${styles.boxWidth}`}>
                  <Newsletter />
                  </div>
                </div>
                <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#23221F] w-full`}>
                  <div className={`${styles.boxWidth}`}>
                  <SneekPeak />
                  </div>
                </div>


      </div>

      

  )
}

export default App