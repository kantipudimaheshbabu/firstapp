import React from 'react'
import './carousel.css';

export const Each = (props) => {
    const{image,heading,price,about}=props.lock;
  return (
    <div>
        
        <div className="carouselCard" style={{ backgroundImage: `url(${image})` }}>
            
            <h1>{heading}</h1>
            {/* <p className='hide'>{about}</p>
            <p className='text-warning fs-4'>{price}</p> */}
        </div>
    </div>
  )
}
