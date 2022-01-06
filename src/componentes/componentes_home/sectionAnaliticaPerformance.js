import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
const sectionAnaliticaPerformance = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion4[0];
  const descripcion = data.descripcion;
  const descripcion2 = data.descripcion2;
  const titulo = data.titulo;
  const imaganes_iconos = data.imagen_iconos;

  return (
    <div style={{ background: "#FFFD02", paddingTop:"30px" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col sm={6}>
            <h2 className="titulos-movill"
              style={{
                lineHeight: "1em",
                fontWeight: "700",
                color: "#280077",
                fontSize: "60px",
              }}
            >
              {titulo}
            </h2>
            <p
              style={{
                color: "#54595f",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion}
            </p>
            <p
              style={{
                marginTop:"30px",
                color: "#54595f",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion2}
            </p>
            <div  style={{ position:"absolute"}}>
            <a
              className="textoclass"
              href="/analiticayperformance"
              
            >
              Descubre más aquí <i className="bi bi-arrow-right"  style={{ marginTop: "5px" }}></i>
             
            </a>
            </div>
          </Col>
          <Col className="sct-analitics2"  style={{ paddingBottom:"50px", marginTop:"50px"}} sm={6}>
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              {imaganes_iconos.map((item, i) => (
                <Col className="analitica-movil" xs={6} md={6} sm={6} key={i}>
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

export default sectionAnaliticaPerformance;
