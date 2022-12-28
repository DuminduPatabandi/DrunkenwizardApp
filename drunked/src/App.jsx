import React from 'react'
import styles from './style'

import { Navbar, Home, Details, About, Work, Contact, SneekPeak, FooterLarge, FooterSmall} from './components'

const App = () => {
  return (
    // Navigation bar
    <div className=' overflow-hidden bg-white '>
      <div className= {`${styles.paddingX} ${styles.flexCenter}  w-full`}>
        <div className={`${styles.boxWidth} fixed mt-12`}>
          <Navbar />
        </div>
      </div>

      
      <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#F9F9F9] py-3 w-full`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>
      <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#23221F] w-full`}>
        <div className={`${styles.boxWidth}`}>
        <Details />
        </div>
      </div>
      <div className= {` ${styles.paddingX} ${styles.flexStart}  w-full`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Work />
          <Contact />
          <SneekPeak />
          <FooterLarge />
          <FooterSmall />
        </div>
      </div>

    </div>
  )
}

export default App