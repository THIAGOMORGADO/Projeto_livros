import React, { useState, useEffect } from 'react'


import './styles.css';

import api from '../../services/api';

import { Button } from 'react-bootstrap';

import { NavBar } from '../../components/Navbar';
import { Card } from '../../components/Card';


export function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(3);
  

  useEffect(() => {
    let isSubscribed = true
    async function getBooksSql() {
      const response = await api.get('/livros');
      if (isSubscribed) {
        setBooks(response.data);
        setLoading(false);
      }
    };
    getBooksSql();
    return () => isSubscribed = false
    // eslint-disable-next-line
  }, []);

  function handleVisible(){
    setVisible((prevValue) => prevValue + 1);
  }

  function handleVisibleMenos(){
    setVisible((prevValue) => prevValue - 1);
  }

  return (

    <>
    <NavBar /> 
      <div className="books-container">
        <div className="books-content">
          <div className="header">
            <h1>Nossa Vitrine de Livros</h1>
          </div>
          <div className="section-butttons">
              <Button 
              onClick={handleVisibleMenos}
              variant="danger"
              > - LIVROS...</Button>
              <Button onClick={handleVisible} variant="success"> + LIVROS...</Button>
          </div>

          <div className="main">
           <div className="books-maps">
            <div className="map">
            {loading ? <h2>Carregando...</h2> :
              books?.slice(0, visible).map((book, index) => {
                return <Card key={index} product={book} className="card-books"/>
            })}
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
          
  );
}