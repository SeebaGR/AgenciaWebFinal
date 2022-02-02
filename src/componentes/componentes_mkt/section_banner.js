import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseMkt from "../../hooks/useMkt";
import capitanNogift from "../../images/capitan-nogift.jpg"
import "../global-styles/estilo.scss"
import "../../componentes/global-styles/layout"
function sectionBannerMkt() {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion1[0];
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const gift = data.git_capitan[0].url;
 
  return (
    <div className="inicioo">
      <Container className="contenedor-body">
      <Row id="rowSc1">
          <Col  className="padd-bann" style={{ paddingTop: "100px", textAlign: "center" }}>
            <h1 style={{width:"70%",     lineHeight: "73px"}} className="letrasBanner">{titulo}</h1>
            <h4 style={{width:"70%", marginTop:"23px"}} className="descripcionBanner">{descripcion}</h4>
          </Col>
          <Col style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
            <img id="rowSc2" className="gift1 lazyload img" alt="ss" src={gift}></img>
            <img id="rowSc2" className="nogift1 lazyload img" alt="ss" src={capitanNogift}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default sectionBannerMkt;
