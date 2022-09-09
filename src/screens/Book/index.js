import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

import api from '../../services/api';

export function BookPage() {
  const location = useLocation();
  const [codigo, setCodigo] = useState('');
  const [book, setBook] = useState([]);

  useEffect(() => {
    setCodigo(location?.state?.select);   
  }, [location]);

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
    <>
      {book?.map((book, index) => {
        return <div key={index} item={book} className="box-book">
          <p>cod: {book.codigo}</p>
          <h1>Título:{book.title}</h1>
          <p>Histórico: {book.historico}</p>
          <p>R${book.preco_venda}</p>
          <img src={book.capa_img} alt={book.title} className="book-img" /> 
        </div>
      })}
    </>
  )
};