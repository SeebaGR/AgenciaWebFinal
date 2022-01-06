import { Link } from "gatsby";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
import "../global-styles/estilo.scss"
const sectionBannerHome = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccionBanner[0];

  const Imagen = data.imagen1[0].url;

  const descripcion = data.desccription;
  const texto_pregunta = data.texto_pregunta;
  let Lista = [
    <li key="id1">
      <img
          alt=""
        key="id1"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
     Configuramos tu embudo de ventas en menos de 30 días.
    </li>,
    <li key="id2">
      <img
      alt=""
        key="id2"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
Maximizamos tu facturación en menos de 60 días.    </li>,
    <li key="id3">
      <img
          alt=""
        key="id3"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
      Escalamos tus resultados en menos de un semestre.
    </li>,
    <li key="id4">
      <img
          alt=""
        key="id4"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
      Convertimos este año en tu mejor año..
    </li>,
  ];
  return (
    <div className="bnHomee" style={{ paddingTop:"150px", backgroundColor: "blue", paddingBottom: "40px" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          id="columnas"
          style={{ alignItems: "center" }}
        >
          <Col sm={6} style={{ color: "#fff" }}>
            <h1 style={{fontWeight:"700", lineHeight:"1em", fontSize:"75px", color: "#fff" }} className="encabezado">
            Aumentamos tus Ventas Online.
        
            </h1>
            
            <ul
              style={{
                fontSize: "21px",
                listStyle: "none",
              }}
            >
              {Lista}
            </ul>
            <p style={{fontSize:"20px", textAlign:"justify"}}>{descripcion}</p>
            <h3 style={{textAlign:"justify"}}>{texto_pregunta}</h3>
            
            <div className="hoverclas2" style={{ position:"absolute" }}>
            

            <a
              href="#agenciamkt" 
               style={{ fontSize:"18px", fontWeight:"700", color: "#fff", textDecoration: "none" }}
            >
              
             <span  ><i  className="bi bi-chevron-down"></i>Conócenos!</span>
            </a>
            </div>
          </Col>
          <Col sm={6} style={{ color: "#fff", textAlign: "center" }}>
            <img className="lazyload img img-fluid imagenBannerHome" alt="" src={Imagen}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionBannerHome;
