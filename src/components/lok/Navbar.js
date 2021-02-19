import React from 'react';
import { Navbar as Navstrap, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Lok from '../../../public/favicon.png';

export default function Navbar() {
  return (
    <Navstrap
      bg='light'
      expanded='sm'
    >
      <Navstrap.Brand as={Link} to='/'>
        <img src={Lok} alt='Lok Icon' />
        <span>Lok</span>
      </Navstrap.Brand>
      <Nav>
        <Nav.Link as={Link} to='/user'>
          Profile
        </Nav.Link>
      </Nav>
    </Navstrap>
  )
};