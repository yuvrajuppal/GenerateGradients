
import Navbar from './components/Navbar'

import Footer from './components/Footer';
import RadialGradpage from './utils/pages/RadialGradpage';
import LinearGradppage from './utils/pages/LinearGradppage';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

 const [page,setpage] = useState(0)

  return (


    <>
      <Navbar setpage={setpage} />
      {/* <RadialGradpage/> */}
      {
        page==0? <LinearGradppage/>:<RadialGradpage/>

      }
      
      <Footer />
        <ToastContainer theme="dark" position="bottom-right" />
    </>
  )
}

export default App
