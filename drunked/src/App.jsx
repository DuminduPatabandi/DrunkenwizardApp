import React from 'react'
import styles from './style'

import { Navbar, Home, Details, About, Work, Contact, SneekPeak, FooterLarge, FooterSmall} from './components'

const App = () => {
  return (
    // Navigation bar
    <div className='bg-[#F9F9F9] w-full overflow-hidden'>
      <div className= {`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      
      <div className= {`bg-[#F9F9F9] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
          <Details />
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