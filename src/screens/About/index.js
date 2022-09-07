import React from 'react'
import { useParams } from 'react-router-dom'
import { NavBar } from '../../components/Navbar';

export  function AboutPage() {
  const { id } = useParams();

  return (
    <div>
      <NavBar />
      <h1>Puxando Usuarios pela url: {id}</h1>
    </div>
    
  )
}
