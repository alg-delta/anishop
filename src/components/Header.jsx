import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div>
        
        <Navbar bg="success" data-bs-theme="light" >
    <Container><img
              src="Anime.webp"
              width="30"
              height="30"
              className="d-inline-block align-top logo"
              alt="React Bootstrap logo"
            />
      <Navbar.Brand as={NavLink} to="/">
      AniShop
      </Navbar.Brand>
      
      <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
          Головна
          </Nav.Link>
        
        
        <Nav.Link as={NavLink} to="/test">
        Тест
        </Nav.Link>
        <Nav.Link as={NavLink} to="/info">
        Інформація
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  )
}
