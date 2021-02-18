import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/authentication/Dashboard';
import Signup from './components/authentication/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container 
    className='d-flex align-items-center justify-content-center'
    style={{ minHeight: '100vh' }}
    >
        <div 
          className='w-100' 
          style={{ maxWidth: '400px' }}
          >
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/signup' component={Signup} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  );
}

export default App;
