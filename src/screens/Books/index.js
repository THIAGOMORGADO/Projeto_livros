import React, {useState, useEffect} from 'react'
import api from '../../services/api';

import { NavBar } from '../../components/Navbar';
import { Card } from '../../components/Card';

export function BooksPage(){
  const [books, setBooks] = useState([]);

    useEffect(() => {
    let isSubscribed = true
    async function getBooksSql() {
      const response = await api.get('/livros');
      if (isSubscribed) {
        setBooks(response.data);
      }        
    };
    getBooksSql();
    return () => isSubscribed = false
    // eslint-disable-next-line
  }, []);
 
  return(
    <>
      <NavBar />
      <h1>TODOS OS LIVROS!</h1>
      {books?.slice(0, 3).map((book, index) => {
        return <Card key={index} product={book} /> 
      })} 
    </>
  );
}