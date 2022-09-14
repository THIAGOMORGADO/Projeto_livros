import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';



import { Container, Nav, Navbar } from 'react-bootstrap/';


import logo  from '../../assets/Logo.png';



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
        <Navbar.Brand href="#home">
            Renato Gonda
          </Navbar.Brand>


          <Nav className="justify-content-end">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-end bar">
                  <Nav.Link onClick={handleHome}>Home</Nav.Link>
                  <Nav.Link onClick={handleBooks}>Livros</Nav.Link>
                  <Nav.Link onClick={handleAbout}>Sobre</Nav.Link>
                  <Nav.Link onClick={handleContacts}>Contato</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Nav>
      </Container>
    </Navbar>
    </>
  )
}
