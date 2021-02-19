import React, { useRef } from 'react';
import { useStateIfMounted } from 'use-state-if-mounted';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import CenterContainer from '../authentication/CenteredContainer';


export default function ForgotPassword() {
  const emailRef = useRef();

  const { resetPassword } = useAuth();

  // Setting loading state so user can't hit button multiple times during creation of account
  const [loading, setLoading] = useStateIfMounted(false);
  const [error, setError] = useStateIfMounted('');
  const [message, setMessage] = useStateIfMounted('');

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Success - check your inbox')
    } catch {
      setError('Email not registered')
    }
    setLoading(false)
  };

  return (
    <CenterContainer>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Reset Password</h2>
          {message && <Alert variant='success'>{message}</Alert>}
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type='email' 
                ref={emailRef} 
                required 
              />
            </Form.Group>
            <Button 
              disabled={loading} 
              className='w-100' 
              type='submit'
            >
              Send Instructions
            </Button>
          </Form>
          <div className='w-100 text-center mt-3'>
            <Link to='/login'>Log In</Link>
          </div>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </CenterContainer>
  )
};
