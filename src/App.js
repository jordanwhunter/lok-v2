import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Profile from './components/authentication/Profile';
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';
import PrivateRoute from './components/authentication/PrivateRoute';
import ForgotPassword from './components/authentication/ForgotPassword';
import UpdateProfile from './components/authentication/UpdateProfile';
import Dashboard from './components/lok/Dashboard';
import TermsOfService from './components/compliance/TermsOfService';
import AcceptableUse from './components/compliance/AcceptableUse';
import PrivacyPolicy from './components/compliance/PrivacyPolicy';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Lok Routes */}
          <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute exact path='/folder/:folderId' component={Dashboard} />

          {/* User Profile Routes */}
          <PrivateRoute path='/user' component={Profile} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} />

          {/* Authentication Routes */}
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/forgot-password' component={ForgotPassword} />

          {/* Compliance Routes */}
          <Route path='/terms-of-service' component={TermsOfService} />
          <Route path='/acceptable-use' component={AcceptableUse} />
          <Route path='/privacy-policy' component={PrivacyPolicy} />
        </Switch>
      </AuthProvider>
    </Router>
  )
};

export default App;
