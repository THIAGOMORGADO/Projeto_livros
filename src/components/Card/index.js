import React from 'react'
import { useNavigate } from 'react-router-dom'



export function Card(props) {
  const navigate = useNavigate();
  
  const {title, codigo, historico, preco_venda, capa_img} = props.product

  function handleGoToBookWithCodigo(codigo) {
    navigate(`/book`, {
      state: { select: codigo}
    })
  }

  return (
    <div className="book">
      <p>{title}</p>
      <img src={capa_img} width={200} height={200} alt={title}/>
      <p>{historico}</p>
      <p>R$ {preco_venda}</p>
      <button className="btn btn-success" onClick={() => handleGoToBookWithCodigo(codigo)}>+ Detalhes</button>
    </div>
  )
}
