import React from 'react';

const AuthContext = React.createContext();

// Children are taken into the provider and renders them out
export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
};