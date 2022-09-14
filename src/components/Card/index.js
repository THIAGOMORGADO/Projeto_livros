import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Card(props) {
  const navigate = useNavigate();
  
  const {title, codigo, historico, preco_venda, capa_img} = props.product

  function handleGoToBookWithCodigo() {
    navigate(`/book`, {
      state: { select: codigo}
    })
  }

  return (
    <main className="card-container" >
      <div className="wrapper-flex">
        <div className="card-area">
          <div className="container">
            <div className='banner-img'></div>
            <img src={capa_img} alt={title} className="profile-img"/>
            <p className="name">{title}</p>
            <p className="description">{historico}</p>
            <button className='btn' onClick={handleGoToBookWithCodigo}>R$ {preco_venda}</button>
          </div>
        </div>
      </div>  
    </main>
  )
}
