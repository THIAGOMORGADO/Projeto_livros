import React, {useState, useEffect} from 'react';

import { useParams } from 'react-router-dom'
// import { Container } from './styles';

import api from '../../services/api';
import { NavBar } from '../../components/Navbar';
import { Card } from '../../components/Card';

import { useNavigate } from 'react-router-dom';

export function BooksPage(){
  const navigate = useNavigate();
   
  const [books, setBooks] = useState([]);
  const { codigo } = useParams();


    useEffect(() => {
    let isSubscribed = true
    async function getBooksSql() {
      const response = await api.get('/livros');
      if (isSubscribed) {
        setBooks(response.data);
        console.log(response.data.codigo)
      }        
    };
    getBooksSql();
    return () => isSubscribed = false
    // eslint-disable-next-line 

    
  }, []);
 
 

  return(
    <>
      <NavBar />
      <h1>AboutPage: {codigo}</h1>

      {books?.slice(0, 3).map((p, index) => {
        return <Card key={index} product={p} />
        
      })        
    } 



    </>
   
  );
}