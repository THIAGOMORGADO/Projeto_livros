import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate,} from 'react-router-dom'

import { AuthProvider, AuthContext } from './context/AuthContext'

import { HomePage } from './screens/Home'
import { LoginPage } from './screens/Login'
import { BooksPage } from './screens/Books';

export function AppRoutes() {
  const Private = ({children}) => {
    const {authenticated, loading} = useContext(AuthContext);

    if(loading) {
      return <div className='loading'>Carregando...</div>
    }


    if(!authenticated) {
      return <Navigate to="/login" />
    } 
    return children;
  }

  return(
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/login" element={<LoginPage />}/>    
          <Route exact path="/books" element={
            <Private>
               <BooksPage />
            </Private>           
          }/>            
        </Routes>
      </AuthProvider>
    </Router>
  );
}
