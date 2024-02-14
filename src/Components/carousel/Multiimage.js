import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import React from 'react'
import { caroselData } from '../Data/carouseldata';
import { Each } from './Each';

//console.log(caroselData);

export const Slider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  const each=caroselData.map((item)=>(<Each lock={item} />))
  return (
    <>
    

  <Carousel showDots={true} responsive={responsive} infinite={true} >
  {each}
</Carousel>;
</>

  )
}

