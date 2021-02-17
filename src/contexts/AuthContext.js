import React, { useContext } from 'react';

const AuthContext = React.createContext();

// Returns context of the AuthContext
export function useAuth() {
  return useContext(AuthContext)
};

// Children are taken into the provider and renders them out
export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
};