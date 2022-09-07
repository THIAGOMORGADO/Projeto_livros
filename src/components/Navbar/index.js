import React, {useState} from 'react'

import './styles.css'
import {useNavigate} from 'react-router-dom';



import logo  from '../../assets/Logo.png';

export  function NavBar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false)


  const handleHome = () => {
    navigate('/')
  }
  const handleBooks = () => {
    navigate('/Books')
  }
  const handleAbouts = () => {
    navigate('/about')
  }
  const handleContacts = () => {
    navigate('/contact')
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="logotipo renato gonda" />
      <span className='logo'>Estante de livros</span>
      <div className={`nav-item ${isOpen && "open"}`} >
        <p onClick={handleHome}>Home</p>
        <p onClick={handleBooks}>Livros</p>
        <p onClick={handleAbouts}>Quem somos</p>
        <p onClick={handleContacts}>Contato</p>
        
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  )
}
