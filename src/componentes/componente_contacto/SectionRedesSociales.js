import React from "react";
import sirenanogift from "../../images/sirena-sinf.png"
import "../../componentes/global-styles/layout"
import {  Container, Row, Col } from "react-bootstrap";
import SocialSocial from "../../SocialMedia/SocialRedes"
import UseHome from "../../hooks/useHome";
function SectionRedesSociales() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion10[0];
  
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
          className="sirena-pc justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col sm={6} style={{ color: "#fff" }}>
            <img loading="lazy"
              className=" img img-fluid"
              src={data.sirena[0].url}
              alt=""
            ></img>
          </Col>
          <Col sm={6}>
            <h1 className="invt-sirena" style={{lineHeight:"53px", fontSize: "60px",color:"#fff" ,textAlign: "center"}}>
              Tambien te invitamos a seguirnos en nuestras redes sociales.
            </h1>
            <Row style={{ textAlign:"center", justifyContent:"center", marginTop:"20px" }} >
              <SocialSocial/>
            </Row>
          </Col>
        </Row>
        <Row
          className="sirena-movil justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
               <Col sm={6}>
            <h1 className="invt-sirena" style={{  color:"#fff"}}>
              Tambien te invitamos a seguirnos en nuestras redes sociales.
            </h1>
            <Row style={{ textAlign:"center" }} >
            <SocialSocial/>
           </Row>
          </Col>
          <Col  sm={6} style={{marginBottom:"20px", display:"flex", justifyContent:"center", color: "#fff" }}>
            <img loading="lazy"
              className="lazyload img img-fluid"
              src={sirenanogift}
              alt=""
            ></img>

          </Col>
     
        </Row>
        
      </Container>
    </div>
  );
}

export default SectionRedesSociales;
