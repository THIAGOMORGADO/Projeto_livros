import React from 'react'
import { useNavigate } from 'react-router-dom'

import './styles.css';

export function Card(props) {
  const navigate = useNavigate();
  
  const {
    title, 
    codigo, 
    historico, 
    preco_venda, 
    capa_img
  } = props.product

  function handleGoToBookWithCodigo(codigo) {
    
    
    navigate(`/book`, {
      state: { select: codigo}
    })
  }

  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-header">
          <p>{title}</p>
        </div>
        <div className="card-image">
          <img src={capa_img} alt="" srcset="" />
        </div>
        <div className="card-description">
            <textarea value={historico} rows="5" cols="5" maxLength="20" />
        </div>
        <div className="card-button">
          <button className="card-button" onClick={handleGoToBookWithCodigo}>Saiba-mais</button>
        </div>
      </div>
    </div>
  )
}
