import React from "react";

import "../../componentes/global-styles/layout"
import {  Container, Row, Col } from "react-bootstrap";

function SectionRedesSociales() {
    const iconos = {
    fontSize:"45px",
    color:"#fffe00",
    }
  return (
    <div style={{ background: "#290877" }}>
      <Container
        className="contenedor-body"
        style={{
          padding: "40px 0px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col sm={6} style={{ color: "#fff" }}>
            <img
              className="lazyload img img-fluid"
              src="https://agencia-navegantes.s3.amazonaws.com/giphy_14_a3122a0f0e.gif"
              alt=""
            ></img>
          </Col>
          <Col sm={6}>
            <h1 style={{ fontSize: "60px",color:"#fff" ,textAlign: "left"}}>
              Tambien te invitamos a seguirnos en nuestras redes sociales.
            </h1>
            <Row>
              <Col sm="4">
                <a href="https://www.facebook.com/agencialosnavegantes/">
                <i  style={iconos}className="hoverAds bi bi-facebook"></i>
                </a>
              </Col>
              <Col sm="4">
              <a href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/">
                <i style={iconos}className="hoverAds bi bi-linkedin"></i>
                </a>
              </Col>
              <Col sm="4">
              <a  href="https://www.instagram.com/agencialosnavegantes/">
                <i style={iconos}className="hoverAds bi bi-instagram"></i>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionRedesSociales;
