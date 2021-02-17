import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';
 
const AuthContext = React.createContext();

// Returns context of the AuthContext
export function useAuth() {
  return useContext(AuthContext)
};

// Children are taken into the provider and renders them out
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    // Change this if ever needed to sign up to a different server (instead of using Firebase)
    return auth.createUserWithEmailAndPassword(email, password)
  };

  // We don't want this in our render, we only want to run this when we mount the component
  useEffect(() => {
    // Firebase's onAuthStateChanged() has its own way of notifying you when the user's state is first set
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      // Due to firebase's authentication parameters, there's an initial loading period while firebase sets up tokens - this results in email's initial value being null
      setLoading(false)
    })
    // onAuthStateChanged() creates a method that, when called, unsubscribes from the listener whenever component is unmounted
    return unsubscribe
  }, []);

  const value = {
    currentUser,
    signup
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
};