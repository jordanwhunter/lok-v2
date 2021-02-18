import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/authentication/Dashboard';
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';
import PrivateRoute from './components/authentication/PrivateRoute';
import ForgotPassword from './components/authentication/ForgotPassword';
import UpdateProfile from './components/authentication/UpdateProfile';
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
              <PrivateRoute exact path='/' component={Dashboard} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
              <Route path='/update-profile' component={UpdateProfile} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
