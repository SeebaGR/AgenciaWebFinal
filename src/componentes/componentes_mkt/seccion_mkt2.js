import React from "react";
import "../global-styles/estilo.scss"
import { Container, Row, Col } from "react-bootstrap";
import UseMkt from "../../hooks/useMkt";
import 'font-awesome/css/font-awesome.min.css';
const seccionMkt2 = () => {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion2[0];
  const descripcion = data.descripcion;
  const descripcion2 = data.descripcion2;
  const imagen_iconos = data.imagen_iconos;
  const titulo = data.titulo;


  return (
    <div  className="cont-mov" style={{ backgroundColor: "#ff5983", padding: "40px 0", paddingBottom:"20px" }}>
      <Container id="mkt-pc" >
        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col  sm={6} className="uno order-xs-12 order-md-1">
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              {imagen_iconos.map((item, i) => (
                <Col xs={6} md={6} sm={6} key={i}>
                  <img loading="lazy"
                  alt=""
                    key={i}
                    className="img-fluid"
                    src={item.url}
                    width={300}
                  ></img>
                </Col>
              ))}
            </Row>
          </Col>
          <Col  sm={6} className="dos order-xs-1 order-md-2">
            <h1 style={{fontWeight:"700"}} className="tituloseccion2Mkt">{titulo}</h1>
            <p
              style={{
                paddingTop: "20px",
                paddingBottom: "20px",
                color: "#000",
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              {descripcion}
            </p>
            <p
              style={{ color: "#000", fontSize: "20px", textAlign: "justify" }}
            >
              {descripcion2}
            </p>
            <div className="hoverclas2">
            <a
              
              href="/contacto"
              style={{
                
                color: "#fffe00",
                fontSize: "18px",
                fontWeight: "700",
                textDecoration: "none",
                textAlign: "right",
              }}
            >
              <p style={{marginRight:"20px"}} className="cnvMkt2" >
                Conversemos<i
                    className="bi bi-arrow-right"
                    style={{ marginTop:"3px", paddingLeft: "3px", position:"absolute" }}
                  ></i> 
              </p>
            
            
            </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container id="mkt-movil" className="contenedor-body">
        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
      <Col  sm={6} className="dos order-xs-12 order-md-1">
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              {imagen_iconos.map((item, i) => (
                <Col xs={6} md={6} sm={6} key={i}>
                  <img
                  alt=""
                    key={i}
                    className="lazyload img img-fluid"
                    src={item.url}
                    width={300}
                  ></img>
                </Col>
              ))}
            </Row>
          </Col>
          <Col  sm={6} className="uno order-xs-1 order-md-2">
            <h1 style={{fontWeight:"700"}} className="tituloseccion2Mkt">{titulo}</h1>
            <p
            className="parrafos-movil"
              style={{
                paddingTop: "20px",
                paddingBottom: "20px",
                color: "#000",
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              {descripcion}
            </p>
            <p
            className="parrafos-movil"
              style={{ color: "#000", fontSize: "20px", textAlign: "justify" }}
            >
              {descripcion2}
            </p>
            <a
              href="/contacto"
              className="conver-text"
              style={{
                color: "#fffe00",
                fontSize: "25px",
                fontWeight: "700",
                textDecoration: "none",
                textAlign: "right",
              }}
            >
              <p className="cnvMkt2" >
                Conversemos
                <i
                    className="bi bi-arrow-right"
                    style={{ marginTop:"3px", paddingLeft: "3px", position:"absolute" }}
                  ></i>
              </p>
            </a>
          </Col>
       
          
        </Row>
      </Container>

    </div>
  );
};

export default seccionMkt2;
