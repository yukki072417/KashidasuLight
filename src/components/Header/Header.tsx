import 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './Header.css'

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
        <Navbar.Brand className='logo' href="#home"><img src="https://dummyimage.com/200x100/000/fff.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-item' href="#home">Home</Nav.Link>
            <Nav.Link className='nav-item' href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header