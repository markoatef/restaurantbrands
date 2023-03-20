import React from 'react';
import {Nav,Navbar, Container} from "react-bootstrap";
import "./Navigation.css";
import {NavLink} from 'react-router-dom'

 const Navigation = () => {
    return (
    
        <Navbar  expand="lg sticky-top">
           <Container>
             <NavLink to="/">
             <div className="img"></div>
             </NavLink>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                 <NavLink className="p-2 p-lg-3" to="/">Home</NavLink>
                 <NavLink className="p-2 p-lg-3" to="/Food">Food</NavLink>
                 <NavLink className="p-2 p-lg-3" to="/Services">Services</NavLink>
                 <NavLink className="p-2 p-lg-3" to="/About-Us">About Us</NavLink>
                 <NavLink className="p-2 p-lg-3" to="/Contact-Us">Contact Us</NavLink>
               </Nav>
             </Navbar.Collapse>
             <button className="d-none d-lg-block"><a>Sign In</a></button>

           </Container>
      </Navbar>

    )
}
export default Navigation;