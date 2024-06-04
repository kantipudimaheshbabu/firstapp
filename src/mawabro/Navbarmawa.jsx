import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { MdOutlineNotificationsActive } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

import "./Navmawa.css"

function Mawaanavbar() {
  return (
    <Navbar expand="lg" className="nav-bg text-white">
      <Container className='d-flex flex-row justify-content-between text-white'>
        <Navbar.Brand href="#home"  className="fs-1 font-monospace fw-bolder text-light">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link href="" className='text-white fs-4'>Faq's</Nav.Link>
            <Nav.Link href="" className='text-white'><button className='btn btn-warning' >Find Work</button></Nav.Link>
            <Nav.Link href="" className='text-white'><button className='btn btn-primary'>Post a work</button></Nav.Link>
            
            <Nav.Link href="" className='text-white fs-1'><MdOutlineNotificationsActive /></Nav.Link>
            <Nav.Link href="" className='text-white fs-1'><BiMessageAltDetail /></Nav.Link>
            <Nav.Link href="" className='text-white fs-1'>  <CgProfile /></Nav.Link>
            {/* <NavDropdown title="Dropdown" className='text-white' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mawaanavbar;





