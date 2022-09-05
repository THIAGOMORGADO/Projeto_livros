import React, { useState } from 'react'

import './styles.css';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

export function Header({props}) {

  const { logout, user, setError, error} = useAuth();

  async function handleLogoutSubmit() {
    try {
      setError('')
      await logout();
    } catch(error) {
      setError(`Falha no Logout ${error}`);
    }
  }

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login')
  }
  return (
    <div className='content'>
      <header>
        <div className="header-container">
          <div className='logo'>
            <h1>{props}</h1> 
          </div>
          <div className="login">
            {user ? 
            <p onClick={handleLogoutSubmit}>LogOut!</p> :
            <p onClick={handleLogin}>Login</p>
            }
          </div>
        </div>
      </header> 
    </div>
  )
}
