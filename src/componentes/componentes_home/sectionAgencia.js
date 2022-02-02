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
    <div id="agencia-marketing" className="agn-baner" >
      <div style={{ textAlign: "center" }}>

      <div class="esconder-titulos">

      <h1 className="txt-Tagencia" >Agencia de Marketing Digital</h1> 
        <p className="parrafos-movil" style={{ fontSize: "20px", fontWeight: "700" }}>Especialistas en Marketing Digital, Analítica <br/> Web & Performance. </p> 
        

      </div>



        <img  className="imagenes-esconder img-fluid"  alt="" src={ImagenSection}></img>
        <Container  className="contenedor-bodyp">
          <Row >
            {ImgenesAds.map((item, i) => (
              <Col xs={6} md={2} sm={2} key={i}>
                <img
                alt=""
                  key={i}
                  className="lazyload img img-fluid"
                  
                  src={item.url}
                ></img>
              </Col>
            ))}
            
          </Row>

        </Container>

        <h1 style={{marginTop:"35px", marginBottom:"15px"}} className="txt-Tagencia agn2">{titulo}</h1>
        <Container className="contenedor-bodyp">
        <Row style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
            {ImagenPartners.map((item, i) => (
              <Col xs={6} md={2} sm={2} key={i}>
                <img
                alt=""
                width={150}
                  key={i}
                  className="lazyload img img-fluid"
                  
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
