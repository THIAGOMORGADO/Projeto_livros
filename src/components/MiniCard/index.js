import React from 'react';
import { useNavigate } from 'react-router-dom'

export function MiniCard(props) {
  const navigate = useNavigate();
  
  const {title, codigo, historico, preco_venda, capa_img} = props.minicardproduct

  function handleGoToBookWithCodigo(codigo) {
    navigate(`/book`, {
      state: { select: codigo}
    })
  }

  return(
      <div className="mini-book">          
        <img src={capa_img} width={200} height={200} alt={title}/>
        <p>{title}</p>
        <button className="btn btn-success" 
        onClick={() => handleGoToBookWithCodigo(codigo)}>
          ver</button>
      </div>
  );
}
