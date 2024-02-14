import React from 'react'

export const Info = (props) => {
  return (
    <div>
        <div className='d-flex flex-row justify-content-between'>
            <div className="">
            <h1 className='fw-bold'>{props.title}</h1>
            <div className='d-flex flex-row text-secondary'> 
              <p className='m-1'>12 days 11 nights</p>
              <p className='m-1'>16+ age</p>
              <p className='m-1'>seaside</p>
            </div>
            </div>
            
            <h1>$1350 <span className='fs-5'>/person</span> </h1>
          </div>
          <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis beatae error nostrum earum laudantium voluptas quos possimus vel doloremque cupiditate modi explicabo, quasi veniam iure temporibus vero culpa obcaecati nemo.
          Sed adipisci minus soluta minima omnis magnam rerum excepturi vero sit. Est vero illo accusamus placeat saepe dolorem reprehenderit voluptatibus ut explicabo, delectus libero alias voluptatum debitis ipsam, dolores asperiores?</p>
          <div className="d-flex flex-row justify-content-between border-top border-bottom">
            <h3 className='fw-bold'>Departure/Return Location</h3>
            <p className='text-secondary fs-5'>	Ko Phangan, Surat Thani 84280, Thailand</p>
          </div>
          <div className="d-flex flex-row justify-content-between border-top border-bottom p-2">
            <h3 className='fw-bold'>Departure Time</h3>
            <p className='text-secondary fs-5'>	Please arrive by 9:15 AM for a departure at 9:30 AM</p>
          </div>
          <div className="d-flex flex-row justify-content-between border-top border-bottom p-2">
            <h3 className='fw-bold'>Return Time</h3>
            <p className='text-secondary fs-5'>	Approximately 8:30 PM</p>
          </div>
          <div className="d-flex flex-row justify-content-between border-top border-bottom p-2">
            <h3 className='fw-bold'>Dress Code</h3>
            <p className='text-secondary fs-5'>		Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="d-flex flex-row justify-content-between border-top border-bottom p-2">
            <h3 className='fw-bold'>Included</h3>
            <p className='text-secondary fs-5'>	 Accommodation ,Guide, Insurance, Meals</p>
          </div>
          <div className="d-flex flex-row justify-content-between border-top border-bottom p-2">
            <h3 className='fw-bold'>Not Included</h3>
            <p className='text-secondary fs-5'>	  Flights, Transport</p>
          </div>

          <div className="d-flex flex-row justify-content-center">
            <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/tour-1-img-1-550x550.jpg" className='w-25 m-3' alt="" />
            <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/tour-1-img-2-550x550.jpg" className='w-25 m-3' alt="" />
            <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/tour-1-img-3-550x550.jpg" className='w-25 m-3' alt="" />
          </div>


        
    </div>
  )
}
