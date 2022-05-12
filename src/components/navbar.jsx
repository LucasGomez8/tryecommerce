import React from 'react'
import { Nav, Navbar, NavbarBrand, Container } from 'react-bootstrap'

export default function Nafbar() {

    const boxShadow = {
        boxShadow: "0px 0px 1px 0px black"
    }

  return (
    <div>
        <Navbar expand="lg" sticky='top' collapseOnSelect style={boxShadow}>
            <Container >
                <NavbarBrand >
                    <Nav.Link href='/'>Try E-Commerce</Nav.Link>
                </NavbarBrand>

                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="/about-us">About us</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link>Categories</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>  
    </div>
  )
}
