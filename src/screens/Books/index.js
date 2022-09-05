import React, {useState, useEffect} from 'react';
// import { Container } from './styles';

import api from '../../services/api';

import { Header } from '../../components/Header'

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
    <Header props={"Estante de livos"}/>

      {books?.slice(0, 10).map((p, index) => {
          return <div key={index} product={p}>
            <p>{p.title}</p>
            <p>{p.preco_venda}</p>
          </div>
      })}

    </>
   
  );
}