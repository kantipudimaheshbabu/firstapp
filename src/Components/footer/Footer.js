import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <div className="Footer bg-dark text-light" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-3  col-12 ft-1">
                            <h3>CODES</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-3  col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="text-light">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                                <li className="text-light">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                                <li className="text-light">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="text-light">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3  col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> 1234567890 </p>
                            <p><i class="fa-solid fa-envelope"></i> 12345@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i>  wanders</p>
                        </div>
                        <div className="col-md-3  col-12">
                            <div className="d-flex flex-row">
                                <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/tour-1-img-1-550x550.jpg" className='w-25' alt="" />
                                <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/tour-1-img-2-550x550.jpg" className='w-25' alt="" />
                                <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/tour-1-img-3-550x550.jpg" className='w-25' alt="" />
                                <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/tour-1-img-4-550x550.jpg" className='w-25' alt="" />
                            </div>
                            <div className="d-flex flex-row">
                                <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/tour-1-img-5-550x550.jpg" className='w-25' alt="" />
                                <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/tour-1-img-6-550x550.jpg" className='w-25' alt="" />
                                <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/tour-1-img-7-550x550.jpg" className='w-25' alt="" />
                                <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/tour-1-img-8-550x550.jpg" className='w-25' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
            <i class="fa-solid fa-copyright"></i>
                <p>copy right 2024</p>
            </div>
        </>
    )
}

export default Footer;