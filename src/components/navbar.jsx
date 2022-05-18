import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Nav, Navbar, NavbarBrand, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Nafbar() {

    const boxShadow = {
        boxShadow: "0px 0px 1px 0px black",
        backgroundColor: "white"
    }

  return (
    <div>
        <Navbar expand="lg" fixed='top' collapseOnSelect style={boxShadow}>
            <Container >
                <NavbarBrand >
                    <Nav.Link as={Link} to='/'>Try E-Commerce</Nav.Link>
                </NavbarBrand>
               
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/about-us">About us</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link>Categories</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                        <Nav.Link as={Link} to="/cart"><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                </Nav>
            </Container>
        </Navbar>  
    </div>
  )
}
