import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Nav, Navbar, NavbarBrand, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navbar.scss'

export default function Nafbar() {

    const boxShadow = {
        boxShadow: "0px 0px 6px 0px black",
        backgroundColor: "white"
    }

  return (
    <div className='content'>
        <Navbar expand="lg" fixed='top' collapseOnSelect style={boxShadow}>
            <Container >
                <NavbarBrand >
                    <Nav.Link as={Link} to='/' className='titleNav'>Try E-Commerce</Nav.Link>
                </NavbarBrand>
               
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse className='navcont'>
                    <Nav className="ms-auto">
                        <NavDropdown title="Products" className='dropdown'>
                            <NavDropdown.Item as={Link} to="/products">All</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/categories">Categories</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to='/about-us-contact'>About Us & Contact</Nav.Link>
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
