import React, {useState} from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

// import { Container } from './styles';

export function HomePage() {

  const { logout, user } = useAuth();
  const [ error, setError ] = useState('');

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

  const handleBooksPage = () => {
    navigate('/books')
  }

  return(

    <div className="container">

      {/* COMPONENTIZAR O HEADER */}

      <header>
        <div className="header-container">
          <div className='logo'>
            <h1>Home de livros</h1>
          </div>
          <div className="login">
            {user ? 
            <p onClick={handleLogoutSubmit}>LogOut!</p> :
            <p onClick={handleLogin}>Login</p>
            }
          </div>
        </div>
      </header> 

      {/* COMPONENTIZAR O HEADER */}

      <main>
        <h2>AQUI é A HOME!</h2>
        <p onClick={handleBooksPage}>VAI PARA BOOKS PAGE</p>
        { error? <p>{error}</p> : "" }
      </main>

    </div>


   
  );
}
