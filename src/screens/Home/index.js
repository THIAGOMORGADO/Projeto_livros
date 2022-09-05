import React, {useState} from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

// import { Container } from './styles';

import { Header } from '../../components/Header'

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
        <Header />

      {/* COMPONENTIZAR O HEADER */}

      <main>
        <h2>AQUI é A HOME!</h2>
        <p onClick={handleBooksPage}>VAI PARA BOOKS PAGE</p>
        { error? <p>{error}</p> : "" }
      </main>

    </div>


   
  );
}
