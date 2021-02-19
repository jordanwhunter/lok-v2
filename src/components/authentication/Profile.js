import React from 'react';
import { useStateIfMounted } from 'use-state-if-mounted';
import { Link, useHistory } from 'react-router-dom';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import CenteredContainer from './CenteredContainer';

export default function Profile() {
  const history = useHistory();
  
  const [error, setError] = useStateIfMounted('');

  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setError('')

    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Cannot log out')
    }
  };

  return (
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
            Update
          </Link>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Link to='/'>To Dashboard</Link><br/>
        <Button 
          variant='link' 
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </div>
    </CenteredContainer>
  )
};
