import {React} from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
 
} from 'react-router-dom';

import HomePage from './screens/Home';
import SigninPage from './screens/SignIn'


export default function AppRoutes() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<SigninPage /> } />
        <Route  exact path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}


