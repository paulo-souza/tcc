import React from 'react';
import AuthProvider from './Context/AuthProvider';
import Routes from './Routes';

export default function App() {
  return(
      <>
        <AuthProvider>
            <Routes />
        </AuthProvider>
      </>
  );
 
}


