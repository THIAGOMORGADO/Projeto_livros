import React from 'react'
import { Container, Row, Col} from 'react-bootstrap/'

import './styles.css'

import { useNavigate } from 'react-router-dom'

import logo from '../../assets/Logo.jpeg';

export function Card(props) {
  const navigate = useNavigate();
  
  const {title, codigo, historico, preco_venda, capa_img} = props.product

  function handleGoToBookWithCodigo() {
    navigate(`/book`, {
      state: { select: codigo}
    })
  }

  return (
   <Container>
    
      <Row>
        <Col className="col-lg-4">
          <div className="content">
            <div className="book">
              <p>{title}</p>
              <img src={capa_img} width={200} height={200}/>
              <p>{historico}</p>
              <p>R$ {preco_venda}</p>
              <button className="btn btn-success">Saiba</button>
            </div>
          </div>
        </Col>
        <Col className="col-lg-4">
          <div className="content">
            <div className="book">
              <p>{title}</p>
              <img src={capa_img} width={200} height={200}/>
              <p>{historico}</p>
              <p>R$ {preco_venda}</p>
              <button className="btn btn-success">Saiba</button>
            </div>
          </div>
        </Col>
        <Col className="col-lg-4">
          <div className="content">
            <div className="book">
              <p>{title}</p>
              <img src={capa_img} width={200} height={200}/>
              <p>{historico}</p>
              <p>R$ {preco_venda}</p>
              <button className="btn btn-success">Saiba</button>
            </div>
          </div>
        </Col>
      </Row>
      
   </Container>
  )
}

