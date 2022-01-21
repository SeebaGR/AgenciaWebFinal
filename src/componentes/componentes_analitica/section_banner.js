import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import UseAnalitica from "../../hooks/useAnalitica";

function sectionBanner() {
  const response = UseAnalitica();
  const data = response.allStrapiAnalitica.nodes[0].ANALITICA_SECCION1[0];
  const titulo = data.titulo;
  const subtitulo = data.subtitulo;
  const gift = data.gift_capitan[0].url;


  return (
    <div className="inicioo2">
   
      <Container id="ban-analitic2" className="contenedor-body" >
        <Row id="rowSc1"  className=" row-tri4 justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}>
          <Col style={{ textAlign: "left" }}>
            <h1 id="analiticaT"
              style={{ color: "#0100ff", fontWeight: "700", fontSize: "75px", lineHeight:"1em", }}
            >
              {titulo}
            </h1>
            <h4 style={{ color: "#0100ff" }}>{subtitulo}</h4>
          </Col>
          <Col>
            <img className="lazyload img img-fluid" alt="" style={{textAlign:"center"}}src={gift}></img>
          </Col>
        </Row>
      </Container>


      <Container id="ban-analitic" className="contenedor-body">
    <Row id="rowSc1">
        <Col className="padd-to" style={{ paddingTop: "100px", textAlign: "center" }}>
          <h1 style={{ color:"#0100ff", width:"85%"}} className="letrasBanner">{titulo}</h1>
          <h4 style={{color:"#0100ff", width:"85%"}} className="descripcionBanner">{subtitulo}</h4>
        </Col>
        <Col style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
          <img id="rowSc2" alt="" src={gift}></img>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default sectionBanner;
