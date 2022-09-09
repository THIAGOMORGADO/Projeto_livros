import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NavBar } from '../../components/Navbar';

import './styles.css';

export function HomePage() {
  const navigate = useNavigate();

  const handleBooksPage = () => {
    navigate('/books')
  }

  return(
    <div className="home-container">
        <NavBar />
        <main>
          <h2>AQUI é A HOME!</h2>
          <p onClick={handleBooksPage} className="btn-home-books">VER TODOS OS LIVROS</p>
        </main>
    </div>   
  );
}
