import React, { useRef } from 'react';
import { useStateIfMounted } from 'use-state-if-mounted';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import CenteredContainer from '../authentication/CenteredContainer';


export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const history = useHistory();

  const { signup } = useAuth();

  // Setting loading state so user can't hit button multiple times during creation of account
  const [loading, setLoading] = useStateIfMounted(false);
  const [error, setError] = useStateIfMounted('');

  async function handleSubmit(event) {
    event.preventDefault()

    // validation check
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password entries must match')
    }

    try {
      setError('')
      setLoading(true)
      // setDidMount(true)
      await signup(
        emailRef.current.value, 
        passwordRef.current.value, 
        passwordConfirmRef.current.value
      )
      history.push('/')
      // return () => setDidMount(false)
    } catch {
      setError('Unable to create account')
    }
    setLoading(false)
  };

  // if (!didMount) {
  //   return null;
  // }

  return (
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
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
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control 
                type='password' 
                ref={passwordConfirmRef} 
                required 
              />
            </Form.Group>
            <Button 
              disabled={loading} 
              className='w-100' 
              type='submit'
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? <Link to='/login'>Log In</Link>
      </div>
    </CenteredContainer>
  )
};
