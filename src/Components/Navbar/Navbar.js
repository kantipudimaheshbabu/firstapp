import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container className='d-flex flex-row justify-content-between text-light' >
        <Navbar.Brand as={Link} to="/" ><span><img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/logo-light.png" className='w-50' alt="" /></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link as={Link} to="/" className=''>HOME</Nav.Link>
            <Nav.Link as={Link} to="tours" className=''>TOURS</Nav.Link>
            <Nav.Link as={Link} to="about" className=''>ABOUT</Nav.Link>
            <NavDropdown title="PAGES" className='text-light' id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="about" >ABOUT</NavDropdown.Item>
              <NavDropdown.Item href="tours">
                TOURS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;






/*
 import React from 'react'
 import "./nav.css"
 import logo from '../assets/logo-light.png'
 import { Link } from "react-router-dom";
 import { Hamburger } from './Hamburger';

 export const Navbar = () => {
   const [showNavbar, setShowNavbar] = React.useState(false);

   const handleShowNavbar = () => {
     setShowNavbar(!showNavbar);
     };
   return (
     <>
    
           <div className="col-12 main bg-dark text-light">
                  <div className="logo" >        
                    <Link to='/'>         
                      <img src={logo} alt=""  / >     </Link>      
                  </div>

       <div className="menu-icon" onClick={handleShowNavbar}>
           <Hamburger />
         </div>


       <ul className='items `${showNavbar && "active"}`' >
         <li><Link className='text-decoration-none' to="/">Home</Link></li>
         <li >Pages
           <ul id="submenu">
             <li className='navtext'><Link className='navtext'  to="about">About</Link></li>
             <li><Link className='text-decoration-none'  to="tours">Tours</Link></li>
           </ul>
         </li>
         <li >Destinations</li>
         <li><Link className='text-decoration-none'  to="tours">Tours</Link></li>
         <li >Blog</li>
         <li><Link className='text-decoration-none' to="about">About</Link></li>
       </ul>

   /* <div className='navbaricons'>
         <div className="m-2 text-light">
         <i class="fa-solid fa-download"  ></i>
         </div>
         <div className="m-2 text-light">
         <i class="fa-brands fa-facebook"></i>
         </div>
         <div className="m-2 text-light">
         <i class="fa-brands fa-twitter"></i>
         </div>
         <div className="m-2 text-light">
         <i class="fa-brands fa-instagram"></i>
         </div         <div className="m-2 text-light">
         <i class="fa-brands fa-linkedin-in"></i>
         </div> 
       
       </div> */

    /* </div>
        
      

    

     </>
   )
 }

 */