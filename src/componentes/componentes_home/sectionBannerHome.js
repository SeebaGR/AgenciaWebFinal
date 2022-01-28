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
    <li className="link-stil" key="id1">
      <img
      style={{paddingTop:"1%"}}
          alt=""
        key="id1"
        className=" img-check"
        src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643284331/check_djs0qw.png"
      ></img>
      <p>
     Configuramos tu embudo de ventas en menos de 30 días.</p>
    </li>,
    <li className="link-stil" key="id2">
      <img
      alt=""
        key="id2"
        className="img-check"
        src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643284331/check_djs0qw.png"
      ></img>
 <p>Maximizamos tu facturación en menos de 60 días.</p>    </li>,
    <li className="link-stil" key="id3">
      <img
          alt=""
        key="id3"
        className="img-check"
        src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643284331/check_djs0qw.png"
      ></img>
       <p>Escalamos tus resultados en menos de un semestre.</p>
    </li>,
    <li className="link-stil" key="id4">
      <img
          alt=""
        key="id4"
        className="img-check"
        src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643284331/check_djs0qw.png"
      ></img>
     <p>Convertimos este año en tu mejor año..</p> 
    </li>,
  ];
  return (
    <div className="bnHomee" style={{ paddingTop:"150px", backgroundColor: "blue" }}>
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
            className="list-list"
              style={{
                fontSize: "21px",
                listStyle: "none",
              }}
            >
              {Lista}
            </ul>
            <p className="list-list" style={{fontSize:"20px", textAlign:"justify"}}>{descripcion}</p>
            <h3 className="list-list2" style={{textAlign:"justify"}}>{texto_pregunta}</h3>
            
            <div className="hoverclas2" style={{ marginTop:"10px", position:"absolute" }}>
            

            <a
              href="/#agencia-marketing" 
               className="btn-clss" style={{ fontSize:"22px", fontWeight:"700", color: "#fff", textDecoration: "none" }}
            >
              
             <span  ><i style={{fontSize:"14px", marginRight:"3px"}}  className=" bi bi-chevron-down"></i>Conócenos!</span>
            </a>
            </div>
          </Col>
          <Col sm={6} style={{ marginTop:"25px", color: "#fff", textAlign: "center" }}>
            <img className="lazyload img img-fluid imagenBannerHome" alt="" src={Imagen}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionBannerHome;
