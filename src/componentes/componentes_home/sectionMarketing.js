import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
import "../global-styles/estilo.scss"
import Slidermkt from "../componentes_home/sliderMkt";


const sectionMarketing = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion3[0];
  const descripcion = data.descripcion;
  const descripcion2 = data.description2;
  const imagen_iconos = data.imagen_iconos;
  const sliderrr = data.slider_mkt;
  const asdsadad = data.pruebas_s;

  console.log( sliderrr );

  const Titulo = data.titulo;

  return (
    <div style={{ backgroundColor: "#280077"}}>
      <Container style={{paddingBottom:"20px"}} className="sc-refresh" id="contenedor-pc">
        <Row>
          <Col style={{ display:"flex", alignItems:"center" }} sm={5} className="order-xs-1 order-md-1">
            <div>
            <h2
              style={{
                lineHeight: "1em",
                fontWeight: "700",
                color: "#ED5682",
                fontSize: "45px",
              }}
            >
              {Titulo}
            </h2>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion}
            </p>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion2}
            </p>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {/* {contenido} */}
            </p>
            <div className="hoverclas2">
            <a
            
              href="/marketing-digital"
              className="texto-link"
            >
              Descubre más aquí	&gt;
              
            </a>
            </div>
            </div>
          </Col>
          <Col  sm={7} className="order-xs-12 order-md-2">
            <Row >
            <Slidermkt></Slidermkt>
            </Row>
          </Col>
        </Row>

        <Row>
  
          <Col  className="order-xs-12 order-md-2">
            <Row >
              {imagen_iconos.map((item, i) => (
                <Col xs={3} md={3} sm={3} key={i} style={{textAlign:"center", marginTop:"20px", marginBottom:"40px"}}>
                  <img
                  
                  loading="lazy"
                  alt=""
                    key={i}
                    className="lazyload img img-fluid"
                    src={item.url}
                    width="70%"
                 
                  ></img>

                  
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

  



      </Container>
        
              
      <Container id="contenedor-movil" style={{padding:"20px"}} className="contenedor-bodyM">
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >

<Col sm={6} className="order-xs-1 order-md-2">
            <h2 className="tit-movil2"
              style={{
                lineHeight: "1.1em",
                fontWeight: "700",
                color: "#ED5682",
                fontSize: "42px ",
              }}
            >
              {Titulo}
            </h2>
            <p className="parrafos-movil"
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion}
            </p>
            <p className="parrafos-movil"
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion2}
            </p>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {/* {contenido} */}
            </p>
            <div style={{position:"absolute"}} >
            <a
            className="estiloLink "
              href="/marketing-digital"
              style={{
                paddingBottom:"20px",
                color: "#fffe00",
                
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Descubre más aquí &gt;
            </a>
            </div>
          </Col>    


          <Col style={{ marginTop:"20px" }}  sm={6} className="order-xs-12 order-md-1">
            <Row >
            <Slidermkt></Slidermkt>
            </Row>
           
          </Col>
    


          <Col style={{ marginTop:"50px" }}  sm={6} className="order-xs-12 order-md-1">
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              {imagen_iconos.map((item, i) => (
                <Col style={{ display:"flex", justifyContent:"center" }} xs={6} md={6} sm={6} key={i}>
                  <img
                  alt=""
                  loading="lazy"
                    key={i}
                    className="lazyload img img-fluid"
                    src={item.url}
                    width="70%"
                   
                  ></img>

                  
                </Col>
              ))}
            </Row>
          </Col>
   
        </Row>
  
      </Container>        



    </div>
  );
};

export default sectionMarketing;
