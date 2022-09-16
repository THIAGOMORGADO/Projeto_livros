 import React from 'react'
import {useNavigate} from 'react-router-dom';

import './styles.css'

import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import  * as Icons from 'react-bootstrap-icons';

export  function NavBar() {
  const navigate = useNavigate();
  

  const handleHome = () => {
    navigate('/')
  }
  const handleBooks = () => {
    navigate('/books')
  }
  const handleAbout = () => {
    navigate('/about')
  }
  const handleContacts = () => {
    navigate('/contact')
  }
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container >
        <Navbar.Brand href="#home" id="brand">
          Renato Gonda
        </Navbar.Brand>
            <div id="search">
              <Form className="d-flex">
                
                <Form.Control
                  type="search"
                  placeholder="Busacar"
                  className="me-2 Input"
                  aria-label="Buscar..."
                />
                <Button variant="outline-success">
                    <Icons.Search />
                </Button>
                </Form>
            </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
          <Navbar.Collapse  id="responsive-navbar-nav" >
            <Nav className="me-auto nav_bar_items" >
              <Nav.Link onClick={handleHome} className="navItem">Home</Nav.Link>
              <Nav.Link onClick={handleBooks} className="navItem">Livros</Nav.Link>
              <Nav.Link onClick={handleAbout} className="navItem">Sobre</Nav.Link>
              <Nav.Link onClick={handleContacts} className="navItem">Contato</Nav.Link>
              <br/>
              <NavDropdown className="bg-drop" title="Sign In" id="navbarScrollingDropdown" >
                <div className="btn_Sign">
                  <NavDropdown.Item 
                      href="/login" 
                      bg="dark" 
                      className="Items"
                    >
                    <div className="icon_area">
                      <Icons.PersonCircle className="icons" 
                      />&nbsp;&nbsp;
                      <span>Sign In.... </span>
                    </div>  
                      
                  </NavDropdown.Item>
                </div>
                  
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
