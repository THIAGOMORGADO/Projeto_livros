import React, { useState, useEffect } from 'react'
import api from '../../services/api';

import { NavBar } from '../../components/Navbar';
import { Card } from '../../components/Card';

export function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <NavBar />
      <h1>TODOS OS LIVROS!</h1>


      {loading ? <h2>Aguardando...</h2> :
        books?.slice(0, 3).map((book, index) => {
          return <Card key={index} product={book} />
        })}
    </>
  );
}