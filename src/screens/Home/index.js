import React, {useEffect, useState} from 'react';
import api from '../../server/api'


// import { Container } from './styles';

const Home = () => {
  const [livros, setLivros] = useState([]);


  useEffect(() => {
    let isSubscribed = true
    async function getLivrosSql() {
      const response = await api.get('/livros');
      if (isSubscribed) {
        setLivros(response.data);
        console.log(response)
      }        
    };
    getLivrosSql();
    return () => isSubscribed = false
    // eslint-disable-next-line 
    console.log(response)
  }, []);


  return(
    <h1>Ola Home</h1>
  );
}

export default Home;