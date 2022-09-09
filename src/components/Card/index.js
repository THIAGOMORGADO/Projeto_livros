import React from 'react'
import { useNavigate } from 'react-router-dom';

import './styles.css';


export function Card(props) {
  const navigate = useNavigate();
  
  const {title, codigo, author, historico, preco_venda, capa_img,} = props.product

  function handlebook() {

    navigate(`/book`, {
      state: codigo,
    })
  }


  return (
    <>
    <main className="card-container" >
      <div className="wrapper-flex">
        <div className="card-area">
          <div class="container">
            <div class='banner-img'></div>
            <img src={capa_img} alt={title}class="profile-img" />
            <p className="name">{title}</p>
            <p className="description">{historico}</p>
            <button className='btn' onClick={handlebook}>R$ {preco_venda}</button>
          </div>
        </div>
      </div>  
    </main>
  </>
  )
}
