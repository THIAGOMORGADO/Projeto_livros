import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';


import HomePage from './screens/Home';
import SigninPage from './screens/SignIn'
import SignUp from './screens/Signup'

import { AuthProvider } from './Context/AuthContext';


export default function AppRoutes() {


  return(
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<SigninPage /> } />
          <Route exact path="/Signup" element={<SignUp /> } />
          <Route  exact path="/" element={<HomePage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}


