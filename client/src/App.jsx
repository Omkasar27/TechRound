import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Product from './pages/Product';
import { ToastContainer } from 'react-toastify';


const App = () =>{
  return(
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;