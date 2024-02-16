import React from 'react'
import './Menu.css';
import tourData from '../Data/Tourdata';

import { Items } from '../Items/Items';
import { Link } from 'react-router-dom';


export const Menu = () => {
  //console.log(list);

   
  return (
    <div className='itembox'>{
      tourData.map((item)=> {

        return(
          <>
          <Link className='tourlink' to={`/${item.title}`}><Items props={item} key={item.id} /></Link>
        
         </>)
      }

       
        
      )
      
      
      }</div>
  )
}
