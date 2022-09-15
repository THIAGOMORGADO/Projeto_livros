import React, {useState, useEffect} from 'react'
import {Container, Row, Col }from 'react-bootstrap';

import { useLocation } from 'react-router-dom'

import api from '../../services/api';
import './style.css'

import { MiniCard }  from '../../components/MiniCard';

export function BookPage() {
  const location = useLocation();
  const [codigo, setCodigo] = useState('');
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState([]);

  useEffect(() => {
    setCodigo(location?.state?.select);   
  }, [location]);


  useEffect(() => {
    let isSubscribed = true
    async function getBooksSql() {
      const response = await api.get(`/livros/`);
      if (isSubscribed) {
        setBooks(response.data);
        setLoading(false)
      }        
    };
    getBooksSql();    
    return () => isSubscribed = false
  }, []);

  useEffect(() => {
    let isSubscribed = true
    async function getBookSql() {
      const response = await api.get(`/livros/${codigo}`);
      if (isSubscribed) {
        setBook(response.data);
      }        
    };
    getBookSql();    
    return () => isSubscribed = false
  }, [codigo]);

  return (
    <Container>
      <Row>
        <Col sm={6}>
            {book?.map((book, index) => {
            return <div key={index} item={book} className="box-book">
              <p>cod: {book.codigo}</p>
              <h1>Título:{book.title}</h1>
              <p>Histórico: {book.historico}</p>
              <p>R${book.preco_venda}</p>
              <img src={book.capa_img} alt={book.title} className="book-img" /> 
          
            </div>
            })}
        </Col>

        <hr/>
        
        <Col sm={1}>
          {loading ? <h2>Carregando...</h2> :
            books?.slice(0, 10).map((p, index) => (
              <MiniCard key={index} minicardproduct={p}/>
            ))}
        </Col>

      </Row>

    
    </Container>
  )
};