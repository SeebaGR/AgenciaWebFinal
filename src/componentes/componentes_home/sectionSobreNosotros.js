import React from "react";
import "../global-styles/estilo.scss"
import { Link } from "gatsby";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
function sectionSobreNosotros() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion9[0];
  return (
    <div style={{ background: "#FA5883", padding: "40px 0px" }}>
      <Container className="contenedor-body">
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col style={{marginBottom:"50px"}} sm={6}>
            <h1 style={{ color: "#fff", fontSize: "60px", fontWeight:"700" }}>{data.titulo}</h1>
            <h2 style={{ color: "#fffe00", fontSize: "45px",fontWeight:"700" }}>
              {data.titulo2}
            </h2>
            <p
              style={{ fontSize: "17px", textAlign: "justify", color: "#fff" }}
            >
              {data.descripcion1}
            </p>
            <p
              style={{ fontSize: "17px", textAlign: "justify", color: "#fff" }}
            >
              {data.descripcion2}
            </p>
            <p
              style={{ fontSize: "17px", textAlign: "justify", color: "#fff" }}
            >
              {data.descripcion3}
            </p>
            <div style={{marginBottom:"30px", paddingBottom:"40px", position:"absolute", display:"flex"}} >
              
            <Link
            
              to="tripulacion"
              style={{
                color: "#fffe00",
                fontSize: "25px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              <span className="estiloLink "> 
Conoce la Tripulación
              <i
                className="bi bi-arrow-right"
                style={{ marginTop: "5px", paddingLeft: "10px" }}
              ></i></span>
              
            </Link>
            </div>
          </Col>
          <Col  sm={6} style={{ textAlign: "center" }}>
            <img src={data.imagen[0].url} className="img-fluid" alt=""></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default sectionSobreNosotros;
