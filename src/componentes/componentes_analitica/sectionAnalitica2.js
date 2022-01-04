import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import UseAnalitica from "../../hooks/useAnalitica";

function sectionAnalitica2() {
  const response = UseAnalitica();
  const data = response.allStrapiAnalitica.nodes[0].analitica_seccion2[0];
  const imagen = data.imagen_iconos;
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const descripcion2 = data.descripcion2;
  const link = data.link_conversemos;

  return (
    <div
      style={{
        fontFamily: "Brandon, Brandon",
        background: "#ffffff",
        padding: "50px 0"
      }}
    >
      <Container  className="contenedor-body">
        <Row  className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}>
          <Col
            style={{ widht: "500px", paddingTop: "60px", textAlign: "center" }}
          >
            <h1 id="anSc2"
              style={{
                textAlign: "left",
                color: "#35107f",
                fontWeight: "750",
                fontSize: "60px",
              }}
            >
              {titulo}
            </h1>
            <h4
              style={{
                lineHeight: "1.6",
                textAlign: "justify",
                fontSize: "20px",
                color: "#54595f",
              }}
            >
              {descripcion}
            </h4>
            <h4
              style={{
                lineHeight: "1.6",
                textAlign: "justify",
                fontSize: "20px",
                color: "#54595f",
              }}
            >
              {descripcion2}
            </h4>
            <a href="/contacto">
              <h6 id="cnvAn"
                style={{
                  
                  textAlign: "left",
                  fontSize: "25px",
                  fontWeight:"700",
                  color: "#280077",
                  fontFamily: "Brandom Agency Regular"
                }}
              >
                {link} <i className="bi bi-arrow-right"  style={{ fontWeight:"700", marginTop: "5px", paddingLeft: "10px" }}></i>
              </h6>
            </a>
          </Col>

          <Col sm={6} className="order-xs-12 order-md-1">
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              {imagen.map((item, i) => (
                <Col xs={6} md={6} sm={6} key={i}>
                  <img
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
        </Row>
      </Container>
    </div>
  );
}

export default sectionAnalitica2;
