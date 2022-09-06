import React, {useState} from 'react'
import './styles.css'
import {useNavigate} from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

export  function NavBar() {
  const navigate = useNavigate();
  const { logout, user, setError, error} = useAuth();
  const [isOpen, setIsOpen] = useState(false)

  async function handleLogoutSubmit() {
    try {
      setError('')
      await logout();
    } catch(error) {
      setError(`Falha no Logout ${error}`);
    }
  }


  const handleLogin = () => {
    navigate('/login')
  }
  const handleBooks = () => {
    navigate('/Books')
  }

  return (
    <div className='navbar'>
      <span className='logo'>Estante de livros</span>
      <div className={`nav-item ${isOpen && "open"}`} >
        <p>Home</p>
        <p onClick={handleBooks}>Livros</p>
        <p>Que somos</p>
        <p>Contatos</p>
        
        {user ? 
            <p onClick={handleLogoutSubmit}>LogOut!</p> :
            <p onClick={handleLogin}>Login</p>
            }
            {error? <p>{error}</p> : ""}
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  )
}
