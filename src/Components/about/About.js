import React from 'react'
import './about.css'

export const About = () => {
  return (
    <div>
        
        <div className="aboutmain">
            <h1 className='text-center headingg'>The Story About Us</h1>
            <div className="aboutfacilities">
                <div className="abouteach">
                    <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/about-us-custom-icon-1.png" className='w-25' alt="" />
                    <h4>Private Transport</h4>
                    <p>Lorem ipsum dolor sit amet, consec tetur adip iscing elit. Nam semfel um, facilisis non dapibus vel.</p>
                </div>
                <div className="abouteach">
                    <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/about-us-custom-icon-2.png" className='w-25' alt="" />
                    <h4>Private Transport</h4>
                    <p>Lorem ipsum dolor sit amet, consec tetur adip iscing elit. Nam semfel um, facilisis non dapibus vel.</p>
                </div>
                <div className="abouteach">
                    <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/about-us-custom-icon-3.png" className='w-25' alt="" />
                    <h4>Private Transport</h4>
                    <p>Lorem ipsum dolor sit amet, consec tetur adip iscing elit. Nam semfel um, facilisis non dapibus vel.</p>
                </div>
                <div className="abouteach">
                    <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/about-us-custom-icon-4.png" className='w-25' alt="" />
                    <h4>Private Transport</h4>
                    <p>Lorem ipsum dolor sit amet, consec tetur adip iscing elit. Nam semfel um, facilisis non dapibus vel.</p>
                </div>
                
            </div>
            <div className="aboutmiddle">
                <div className="video">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/122149315?h=0223037cdb" width="640" height="360" frameborder="0"    allowfullscreen></iframe>

                </div>
                <div className="m-5">
                    <h1>Humble Beginnings</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et pretium nibh. Nullam eget accumsan, sagittis ligula. Aliquam erat volutpat nuncum. Aene ac lorem id orci hendrerit facilisis sed sed leo ium. Vestibulum dignissim at libero pretium.</p>
                    <h3 style={{color: "yellow",fontFamily:'fantasy'}}>George</h3>
                </div>
    
            </div>

        </div>
    </div>
  )
}
