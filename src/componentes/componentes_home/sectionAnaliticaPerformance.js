import React from "react";
import "../global-styles/estilo.scss"
import { Container, Row, Col } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
import Slideranalitica from "../componentes_home/sliderAnalitica";



const sectionAnaliticaPerformance = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion4[0];
  const descripcion = data.descripcion;
  const descripcion2 = data.descripcion2;
  const titulo = data.titulo;
  const imaganes_iconos = data.imagen_iconos;

  return (
    <div style={{padding:"40px"}} className="contenedor-bodyM dvvndvb" >
      <Container >
        <Row >
          <Col className="sct-analitics2 order-md-2" sm={6}>
            <div >
            <h2 className="titulos-movill"
              style={{
                width: "70%",
                lineHeight: "1em",
                fontWeight: "700",
                color: "#280077",
                fontSize: "60px",
              }}
            >
              {titulo}
            </h2>
            <p
            className="parrafos-movil"
              style={{
                color: "#54595f",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion}
            </p>
            <p
            className="parrafos-movil"
              style={{
                marginTop:"30px",
                color: "#54595f",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion2}
            </p>
            <div className="agency hoverclas2">
            <a
              className="textoclass estiloLink "
              href="/analitica-performance"
              
            >
              Descubre más aquí &gt;
             
            </a>
            </div>

            </div>
          </Col>
          <Col  sm={6} className="order-xs-12 order-md-1">
            <Row >
            <Slideranalitica></Slideranalitica>
            </Row>
          </Col>
        </Row>


        <Row>
  
  <Col  className="order-xs-12 order-md-2">
    <Row >
      {imaganes_iconos.map((item, i) => (
        <Col xs={4} md={2} sm={12} key={i} style={{textAlign:"center", marginTop:"40px", marginBottom:"40px", display:"flex", alignItems:"center"}}>
          <img
          
          loading="lazy"
          alt=""
            key={i}
            className="lazyload img img-fluid"
            src={item.url}
           
         
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

export default sectionAnaliticaPerformance;
