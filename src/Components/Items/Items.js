import React from 'react';

import './items.css';


export const Items = (props) => {
   
    
    const {img,id,title,price,about,days}=props.props;

   //console.log(props.props);
   

  
  return (
  <>
  <div className='p-2 text-left bgimage' >
    <div className="box" style={{backgroundImage:`url(${img})`}}>

    {/* <img src={img} alt={title} className='imge' /> */}
    <h2>{title}</h2>
    {/* <h6>{price}</h6>
    <p>{about}</p>
    <p>{days}</p> */}

    </div>

  
  </div>
  

  


  </>
    
  )
}
