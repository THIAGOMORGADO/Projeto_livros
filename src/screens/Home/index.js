import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';


// import { Container } from './styles';

const Home = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/login')
  }
  const handleSignUp = () => {
    navigate('/SignUp')
  }
  const handleBooksPages = () => {
    navigate('/bookspage')
  }
  return(
   <div className="Container">
    <header>
      <div className="header-container">
        <div className='logo'>
          <h1>Home de livros</h1>
        </div>
        <div className="lougIn">
          <a onClick={handleSignIn}>Sign-in</a> /
          <a href="" onClick={handleSignUp}>Sign-Up</a>
        </div>
      </div>
    </header>
    <a onClick={handleBooksPages}>Estante</a>
   </div>
  );
}

export default Home;