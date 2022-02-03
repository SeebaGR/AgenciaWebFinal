import React from "react";
import sirenanogift from "../../images/sirena-sinf.png"
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
          className="sirena-pc justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col sm={6} style={{ color: "#fff" }}>
          <video width="320" height="240" loop muted autoplay="autoplay" >
  <source src="https://res.cloudinary.com/agencia-web-refresh/video/upload/v1643836787/viviviivid_6a4068485f.mp4" type="video/mp4"/>
 
 
</video>
          </Col>
          <Col sm={6}>
            <h1 className="invt-sirena" style={{lineHeight:"53px", fontSize: "60px",color:"#fff" ,textAlign: "center"}}>
              Tambien te invitamos a seguirnos en nuestras redes sociales.
            </h1>
            <Row style={{ textAlign:"center", justifyContent:"center", marginTop:"20px" }} >
              <Col className="iconos-sirena" sm="4">
                <a href="https://www.facebook.com/agencialosnavegantes/">
                <i  style={iconos}className="hoverAds bi bi-facebook"></i>
                </a>
              </Col>
              <Col className="iconos-sirena" sm="4">
              <a href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/">
                <i style={iconos}className="hoverAds bi bi-linkedin"></i>
                </a>
              </Col>
              <Col className="iconos-sirena" sm="4">
              <a  href="https://www.instagram.com/agencialosnavegantes/">
                <i style={iconos}className="hoverAds bi bi-instagram"></i>
                </a>
              </Col>
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
              <Col sm="4">
                <a className="icon-marg" href="https://www.facebook.com/agencialosnavegantes/">
                <i  style={iconos}className="hoverAds bi bi-facebook"></i>
                </a>
                <a className="icon-marg" href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/">
                <i style={iconos}className="hoverAds bi bi-linkedin"></i>
                </a>
                <a className="icon-marg"  href="https://www.instagram.com/agencialosnavegantes/">
                <i style={iconos}className="hoverAds bi bi-instagram"></i>
                </a>
              </Col>
           </Row>
          </Col>
          <Col  sm={6} style={{display:"flex", justifyContent:"center", color: "#fff" }}>
            <img style={{marginBottom:"20px"}}
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
