
import Navbar from './components/Navbar'

import Footer from './components/Footer';
import RadialGradpage from './utils/pages/RadialGradpage';
import LinearGradppage from './utils/pages/LinearGradppage';
import { useState } from 'react';

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
    </>
  )
}

export default App
