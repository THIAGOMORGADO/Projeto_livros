import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

import { NavBar } from '../../components/Navbar';

// import { Container } from './styles';

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
        <p onClick={handleBooksPage}>VAI PARA BOOKS PAGE</p>
      </main>

    </div>


   
  );
}