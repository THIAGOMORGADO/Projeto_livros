import React, { useState, useEffect } from 'react'
import { Container, Row, Col }from 'react-bootstrap';

import api from '../../services/api';

import { NavBar } from '../../components/Navbar';
import { Card } from '../../components/Card';

import './style.css'

export function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(3)

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
          
        <Container>
          <Row>
            <Col>
              <h1>Nossa Vitrine de Livros</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <button onClick={handleVisibleMenos}> - LIVROS...</button>
              <button onClick={handleVisible}> + LIVROS...</button>
            </Col>
          </Row>

          <Row>
            <Col className="contentBooks">
              {loading ? <h2>Carregando...</h2> :
              books?.slice(0, visible).map((book, index) => {
                return <Card key={index} product={book}/>
              })}
            </Col>
          </Row>

        </Container>
    
    </>
          
  );
}