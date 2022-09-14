import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NavBar } from '../../components/Navbar';



export function HomePage() {
  const navigate = useNavigate();

  const handleBooksPage = () => {
    navigate('/books')
  }

  return(
    <div>
        <NavBar />
        <main>
          <h2>AQUI é A HOME!</h2>
          <p onClick={handleBooksPage}>VER TODOS OS LIVROS</p>
        </main>
    </div>   
  );
}
