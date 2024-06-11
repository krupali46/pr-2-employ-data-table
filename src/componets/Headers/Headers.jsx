import React, { useEffect, useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { getData } from '../Service/helper';



const Headers = () => {
  
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" className='ms-4'>employee</Navbar.Brand>
      <Nav className="mr-auto col-6">
        <Nav.Link as={Link} to="/createform">Create</Nav.Link>
        <Nav.Link as={Link} to="/">View</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Headers;

