import React, { useState, useEffect } from 'react'
import { Container, Row, Col }from 'react-bootstrap';

import './styles.css';

import api from '../../services/api';

import { NavBar } from '../../components/Navbar';
import { Card } from '../../components/Card';

export function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(1)

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
        <Container fluid>
           
          <Container>
            <Row>
              <Col>
                <h1>TODOS OS LIVROS!</h1>
              </Col>
            </Row>

            <Row>
              <Col>
               
              </Col>
            </Row>

          </Container>

          <Container>
            <Row >
              <Col>
                {loading ? <h2>Carregando...</h2> :
                books?.slice(0, visible).map((book, index) => {
                  return <Card key={index} product={book}/>
                })}
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col>
                <div className="footer">
                  <button onClick={handleVisibleMenos} className="btn btn-danger"> - LIVROS...</button>
                  <button onClick={handleVisible} className="btn btn-primary"> + LIVROS...</button>
                </div>
              </Col>
            </Row>
          </Container>

      </Container>
    
    </>
      
  );
}