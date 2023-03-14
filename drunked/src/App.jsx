import styles from './style'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { Navbar, Footer, Popup } from './components'
import {Homepage, Gallery, Contact, Video} from './pages'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Navbar/>}>
      <Route index element={<Homepage/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='contact' element={<Contact/>}>
        <Route path='popup' element={<Popup/>}/>
      </Route>
      <Route path='video' element={<Video/>}/>   

    </Route>

  )
)

const App = () => {
  return (

    <div className=' overflow-hidden bg-white w-full'>

      <RouterProvider router={router} />

      {/* <div className= {`${styles.paddingX} ${styles.flexCenter}  w-full`}>
        <div className={`${styles.boxWidth} fixed mt-12`} style={{zIndex: 10}}>
          <Navbar />
        </div>
      </div> */}

      <Footer/>

    </div>

      

  )
}

export default App