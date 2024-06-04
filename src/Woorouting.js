import React from 'react'
import Wnav from './woolah/Wnav'
import Wbody from './woolah/Wbody'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipe from './woolah/Recipe'


const Woorouting = () => {
  return (
    <div>

        
        
        <BrowserRouter>
          <Wnav/>
          <Routes>
            <Route path='/' Component={Wbody} />
            <Route path='recipe' Component={Recipe} />
            
          </Routes>

        </BrowserRouter>
        

    </div>
  )
}

export default Woorouting