import React, {Children, useContext} from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';


import HomePage from './screens/Home';
import SigninPage from './screens/SignIn'
import SignUpPage from './screens/Signup'
import BooksPages from './screens/books';

import { AuthProvider, AuthContext } from './Context/AuthContext';


export default function AppRoutes() {
  const Private = ({children}) => {
    const {authenticated} = useContext(AuthContext);

    if(!authenticated) {
      return <Navigate to="/login" />
    } 
    return children;
  }

  return(
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<HomePage /> } />
          <Route exact path="/login" element={<SigninPage /> } />
          <Route exact path="/Signup" element={<SignUpPage /> } />
          

          <Route  exact path="/bookspage" element={
            <Private>
               <BooksPages />
            </Private>
           
          } />
            
        </Routes>
      </AuthProvider>
    </Router>
  );
}


