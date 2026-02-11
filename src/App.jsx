
import Navbar from './components/Navbar'

import Footer from './components/Footer';
import RadialGradpage from './pages/RadialGradpage';
import LinearGradppage from './pages/LinearGradppage';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GradientGenerator from './components/GradientGenerator';
import { Routes,Route } from 'react-router-dom';
import CreateColorcardpage from './pages/CreateColorcardpage';

function App() {

 const [page,setpage] = useState(0)

  return (


    <>
      <Navbar setpage={setpage} />
      {/* <RadialGradpage/> */}
      {
       

      }
      <Routes>
        <Route path='/creategradiant' element={<CreateColorcardpage/>}   />
        <Route path='/' element={ page==0? <LinearGradppage/>:<RadialGradpage/>}/>
      </Routes>

      
      
      <Footer />
        <ToastContainer theme="dark" position="bottom-right" />
    </>
  )
}

export default App
