import React, { useEffect, useState } from 'react'
import api from '../../services/api';

import { useParams } from 'react-router-dom'

export function BookPage({id}) {
  console.log(JSON.stringify(id))

  const [books, setBooks] = useState([]);
  const { codigo } = useParams();


  useEffect(() => {

    const isSubscribed = true

    async function getBooksSql() {
      const {response} = await api.get('/livros');
      if (isSubscribed) {
        setBooks(response);
        console.log(response)
      }        
    };
    getBooksSql();
  }, [])

  return (
   <h1>{books}</h1>
  )
}
