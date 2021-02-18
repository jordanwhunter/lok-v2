import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const { login } = useAuth();

  // Setting loading state so user can't hit button multiple times during creation of account
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(
        emailRef.current.value, 
        passwordRef.current.value
      )
      history.push('/')
    } catch {
      setError('Cannot log in')
    }
    setLoading(false)
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Log In</h2>
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
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type='password' 
                ref={passwordRef} 
                required 
              />
            </Form.Group>
            <Button 
              disabled={loading} 
              className='w-100' 
              type='submit'
            >
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </>
  )
};
