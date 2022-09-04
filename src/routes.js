import {React} from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import Home from './screens/Home';
import Signin from './screens/SignIn'


export default function AppRoutes() {
  return(
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home /> } />
        <Route exact path="/" element={<Signin />} />
      </Routes>
    </Router>
  );
}


