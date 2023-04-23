import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hedaer = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Email-Pass-Auth</Navbar.Brand>
          <Nav className="ms-auto">
            <Link className='mx-3 text-decoration-none' to='/'>Home</Link>
            <Link className='mx-3 text-decoration-none' to="/login">Login</Link>
            <Link className='mx-3 text-decoration-none' to="/register">Register</Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default Hedaer;