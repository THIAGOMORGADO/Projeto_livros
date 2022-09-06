import React from 'react'

import './styles.css';

import logo from '../../assets/Logo.png'

export function Card(props) {
  
  const {title, codigo, author, historico, preco_venda, capa_img,} = props.product

  return (
    <>
    <main className="card-container" >
      <div className="wrapper-flex">
        <div className="card-area">
          <div class="container">
            <div class='banner-img'></div>
            <img src={capa_img} alt={title}class="profile-img" />
            <p class="name">{title}</p>
            <p class="description">{historico}</p>
            <button class='btn'>R$ {preco_venda}</button>
          </div>
        </div>
      </div>  
    </main>
  </>
  )
}
