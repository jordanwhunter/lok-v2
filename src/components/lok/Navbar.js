import React from 'react';
import { Navbar as Navstrap, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

export default function NavbarComponet() {
  return (
    <Navstrap bg='light' expand='sm' > 
      <Navstrap.Brand as={Link} to='/'>
        <LockTwoToneIcon />
        <h6 className='d-inline'>
          Lok
        </h6>
      </Navstrap.Brand>
      <Nav>
        <Nav.Link as={Link} to='/user' >
          <h6 className='d-inline'>
            Profile
          </h6>
        </Nav.Link>
      </Nav>
    </Navstrap>
  )
};
