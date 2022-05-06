import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
import "../global-styles/estilo.scss"
import SliderEco from "../componentes_home/sliderDiseño";
const sectionDesarrollo = (props) => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion5[0];
  const descripcion = data.descripcion;
  const titulo = data.titulo;
  const imaganes_iconos = data.imagen_iconos;
  return (
    <div className="cont-mov3 contenedor-bodyM" style={{ padding:"40px", backgroundColor: "#FA5983"}}>
      <Container  >
        <Row>
          <Col className="sct-analitics2" sm={6}>
            <div style={{float:"right"}}>
            <h2
              className="titulos-movill eaea"
              style={{
                width:"70%",
                lineHeight: "1em",
                fontWeight: "700",
                color: "#280077",
                fontSize:"60px"
              }}
            >
              {titulo}
            </h2>
            <p
            className="parrafos-movil"
              style={{
                width:"89%",
                marginTop:"30px",
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion}
            </p>
              <div className="hoverclas2">
            <a
              className="texto-link"
              href="https://ecommerce.agencialosnavegantes.cl/"
              
            >
              Descubre más aquí &gt;
             
            </a>
            </div>
            </div>
          </Col>
          <Col  sm={6} className="order-xs-12 order-md-2">
            <Row >
            <SliderEco></SliderEco>
            </Row>
          </Col>
        </Row>
        <Row>
  
  <Col  className="order-xs-12 order-md-2">
    <Row >
      {imaganes_iconos.map((item, i) => (
        <Col xs={6} md={3} sm={3} key={i} className="fotos-analitics">
          <img
          
          loading="lazy"
          alt=""
            key={i}
            className="lazyload img img-fluid"
            src={item.url}
            width="70%"
         
          ></img>

          
        </Col>
      ))}
    </Row>
  </Col>
</Row>
      </Container>
    </div>
  );
};

export default sectionDesarrollo;
