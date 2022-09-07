import React from 'react'
import { useParams } from 'react-router-dom';
import { NavBar } from '../../components/Navbar'

export function ContactPage() {
  const { id } = useParams();
  return (
    <div>
      <NavBar />
      <h1>Contatos: { id } </h1>
    </div>
  )
}
