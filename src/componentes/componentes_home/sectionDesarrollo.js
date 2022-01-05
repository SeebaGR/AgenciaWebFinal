import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
const sectionDesarrollo = (props) => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion5[0];
  const descripcion = data.descripcion;
  const titulo = data.titulo;
  const imaganes_iconos = data.imagen_iconos;
  return (
    <div className="cont-mov" style={{ backgroundColor: "#FA5983", padding: "70px" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col sm={6}>
            <h2
              className="titulos-movill"
              style={{
                lineHeight: "1em",
                fontWeight: "700",
                color: "#280077",
                fontSize:"60px"
              }}
            >
              {titulo}
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
              <div className="hoverclas2" style={{position:"absolute"}}>
            <a
              
              href="https://ecommerce.agencialosnavegantes.cl/"
              style={{ color: "#280077", fontSize: "25px", fontWeight: "700" }}
            >
              Descubre más aquí
              <i className="bi bi-arrow-right"  style={{  marginTop: "5px" }}></i>
             
            </a>
            </div>
          </Col>
          <Col style={{marginTop:"50px"}} sm={6}>
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              {imaganes_iconos.map((item, i) => (
                <Col xs={6} md={6} sm={6} key={i}>
                  <img
                  alt=""
                    key={i}
                    className="lazyload img img-fluid"
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
};

export default sectionDesarrollo;
