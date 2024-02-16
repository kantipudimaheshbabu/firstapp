
import React from 'react'
import './App.css'


import  NavBar  from './Components/Navbar/Navbar';


import Footer from './Components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/home/Home';
import { Menu } from './Components/Menu/Menu';
import { About } from './Components/about/About';
import { Each } from './Components/Menu/Each';

import Notfound from './Components/home/Notfound';
import { Destiny } from './Components/home/Destiny';





 const App = () => {
  return (
    <div style={{height:'100vh',width:'100vw'}}>
      
      
      
      
      <BrowserRouter>
      <NavBar/>
      
      <Routes>
      
        <Route path="/"  index element={<Home/>}  />
        <Route path="tours" element={<Menu/>} />
        <Route path="about" element={<About/>} />
        <Route path="destiny" element={<Destiny/>} />
        <Route path="/:title" element={<Each/>} />
        <Route path="*" element={<Notfound/>} />
        
        
        
      </Routes>
      <Footer/>
      
      

      </BrowserRouter>

      
      
      
    </div>
  )
}


export default App;
