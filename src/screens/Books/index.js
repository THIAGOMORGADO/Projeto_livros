import React, {useState, useEffect} from 'react';
// import { Container } from './styles';

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


  console.log(books);


  return(
    <>
    <NavBar />
    

    {books?.slice(0, 3).map((p, index) => {
        return <Card key={index} product={p}/>
      })        
    } 

    </>
   
  );
}