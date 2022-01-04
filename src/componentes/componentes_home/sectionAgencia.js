import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
import '../global-styles/estilo.scss'
function sectionAgencia() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion2[0];
  const titulo = data.titulo;
  const ImagenSection = data.imagen_titulo[0].url;
  const ImgenesAds = data.imagen_ads;
  const ImagenPartners = data.imagen_partners;

  return (
    <div style={{ paddingBottom: "40px", paddingTop: "40px" }}>
      <div style={{ textAlign: "center" }}>

      <div class="esconder-titulos">

      <h1 style={{ fontSize: "50px", fontWeight: "700" }}>Agencia de Marketing Digital</h1> 
        <p style={{ fontSize: "20px", fontWeight: "700" }}>Especialistas en Marketing Digital, Analítica <br/> Web & Performance. </p> 
        

      </div>



        <img  className="imagenes-esconder img-fluid"  alt="" src={ImagenSection}></img>
        <Container className="contenedor-body">
          <Row >
            {ImgenesAds.map((item, i) => (
              <Col xs={6} md={2} sm={2} key={i}>
                <img
                alt=""
                  key={i}
                  className="img-fluid"
                  style={{ width: "95%" }}
                  src={item.url}
                ></img>
              </Col>
            ))}
            
          </Row>

        </Container>

        <h1 style={{fontWeight:"700", fontSize:"50px", marginTop:"20px"}}>{titulo}</h1>
        <Container className="contenedor-body">
          <Row style={{paddingTop:"50px", display:"flex", justifyContent:"center"}}>
          
            {ImagenPartners.map((item, i) => (
              <Col style={{marginRight:"10px", marginLeft:"10px"}} xs={4} md={2} sm={3}   key={i}>
                <img
                 alt=""
                  key={i}
                  className="img-fluid"
                  
                  src={item.url}
                ></img>
              </Col>
            ))}
            
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default sectionAgencia;
