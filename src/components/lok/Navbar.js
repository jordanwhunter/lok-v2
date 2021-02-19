import React from 'react';
import { Navbar as Navstrap, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Lok from '../../media/favicon.png';

export default function NavbarComponet() {
  return (
    <Navstrap bg='light' expand='sm' > 
      <Navstrap.Brand as={Link} to='/'>
          {/* <img 
            src={Lok} 
            alt='Lok Icon'
            style={{ maxWidth: '4%' }}
          /> */}
          <span>Lok</span>
      </Navstrap.Brand>
      <Nav>
        <Nav.Link as={Link} to='/user' >
          Profile
        </Nav.Link>
      </Nav>
    </Navstrap>
  )
};
