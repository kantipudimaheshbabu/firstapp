import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './each.css';
import tourData from '../Data/Tourdata';
import { Gall } from './Gall';
import { Info } from './Info';
import { Plan } from './Plan';



export const Each = () => {
    const {title}=useParams();

    let tour=tourData.find((p)=>p.title===title)
    console.log(tour);

    const[info,setInfo]=useState(true);
    const[plan,setPlan]=useState(false);
    const[loc,setLoc]=useState(false);
    const[gall,setGall]=useState(false);
    const[review,setReview]=useState(false);

    function Information(){
      setInfo(true);
      setPlan(false)
      setLoc(false)
      setGall(false)
      setReview(false)
    }
    function tourPlan(){
      setInfo(false);
      setPlan(true)
      setLoc(false)
      setGall(false)
      setReview(false)
    }
    function location(){
      setInfo(false);
      setPlan(false)
      setLoc(true)
      setGall(false)
      setReview(false)
    }
    function gallery(){
      setInfo(false);
      setPlan(false)
      setLoc(false)
      setGall(true)
      setReview(false)
    }
    function Reviews(){
      setInfo(false);
      setPlan(false)
      setLoc(false)
      setGall(false)
      setReview(true)
    }


  return (
    <>
    {/* <div>{title}</div> */}

    <div className="eachbg" style={{backgroundImage:`url(${tour.img})`}}>
      <h1 className='eachhead'>{title}</h1>
      <p>Show travel details, galleries, allow the users to search & more. And our simple booking form allows visitors to easily book their next tour.</p>
      <div className="">
        <ul className='eachnav'>
          <li><button onClick={Information}  className=''>Information</button></li>
          <li><button onClick={tourPlan} className=''>plan</button></li>
          <li><button onClick={location} className=''>Location</button></li>
          <li><button onClick={gallery}  className=''>Gallery</button></li>
          <li><button onClick={Reviews} className=''>Reviews</button></li>
        </ul>
       

    </div>
      


      <div className="eachcontent">
        <div className="textcontainer p-5">
        <div className="">
          
          {gall && <Gall>gallery</Gall>}
          {info && <Info title={title}  />}
          {plan && <Plan title={title}/>}
          {loc && "location"}
          {review && "reviews"}
        </div>

          
          

        
        </div>
        <div className="eachform">
          <h4 className=''>find your destination</h4>

          <form action="" className='p-3'>
            <input type="text" className='form-control m-2' placeholder='name' />
            <input type="text" className='form-control m-2' placeholder='Email' />
            <input type="text" className='form-control m-2' placeholder='confirm Email' />
            <input type="text" className='form-control m-2' placeholder='phone' />
            <input type="text" className='form-control m-2' placeholder='where to ?' />
            <input type="text" className='form-control m-2' placeholder='No. of tickets' />
            <select className='form-control m-2' name="month" id="">
              <option value="">jan</option>
              <option value="">feb</option>
              <option value="">mar</option>
              <option value="">apr</option>
              <option value="">may</option>

            </select>
            <textarea name="" placeholder='Message' className='form-control m-2' id="" cols="25" rows="3"></textarea>
            <div className='buttons m-2'>
              <button className='btn btn-warning'>check availability</button>
              <button className='btn btn-warning'>Book now</button>
              
            </div>
            
            
          </form>
          <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/tour-sidebar-img-1.jpg" className='w-50 m-5' alt="" />
        </div>


      
          
        </div>

    </div>


    </>
  )
}
