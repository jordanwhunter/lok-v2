import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';


export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const history = useHistory();

  const { currentUser } = useAuth();

  // Setting loading state so user can't hit button multiple times during creation of account
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    // event.preventDefault()

    // // validation check
    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError('Password entries must match')
    // }

    // try {
    //   setError('')
    //   setLoading(true)
    //   await signup(
    //     emailRef.current.value, 
    //     passwordRef.current.value, 
    //     passwordConfirmRef.current.value
    //   )
    //   history.push('/')
    // } catch {
    //   setError('Unable to create account')
    // }
    // setLoading(false)
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Update Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type='email' 
                ref={emailRef} 
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type='password' 
                ref={passwordRef} 
                required
                placeholder='Leave blank to keep the same'
              />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control 
                type='password' 
                ref={passwordConfirmRef} 
                required
                placeholder='Leave blank to keep the same'
              />
            </Form.Group>
            <Button 
              disabled={loading} 
              className='w-100' 
              type='submit'
            >
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Link to='/'>Cancel</Link>
      </div>
    </>
  )
};

