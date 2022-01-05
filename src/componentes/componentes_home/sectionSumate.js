import React from "react";
import { Link } from "gatsby";
import '../global-styles/estilo.scss'
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
const sectionSumate = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion10[0];
  return (
    <div className="bodySumate" style={{ backgroundColor: "#290877", padding: "50px 0" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col id="sirena-gift" sm={6}>
            <img src={data.sirena[0].url} className="lazyload img img-fluid" alt=""></img>
          </Col>
          <Col sm={6}>
            <h1 id="tituloSumateMov"
            className="tituloSobrer"
              style={{
                fontWeight:"700",
                color: "#ff5983",
                fontSize: "60px",
                lineHeight: "1em",
              }}
            >
              {data.titulo}
            </h1>
            <br></br>
            <h2

              className="subtituloSobrer"
              style={{
                fontWeight:"700",
                color: "#fffe00",
                fontSize: "41px",
                lineHeight: "1.1em",
              }}
            >
              {data.titulo2}
            </h2>
            <br></br>
            <p id="dscSumate" style={{ fontSize:"20px",  color: "#fff",textAlign:"justify" }}>{data.descripcion}</p>
              <div style={{position:"absolute", display:"flex"}}>
            <Link
            className="estilolink"
              style={{
                color: "#fffe00",
                fontSize: "25px",
                fontWeight: "500",
                textDecoration: "none",
              }}
              to="/contacto"
            >
              
            </Link>
            <Link className="hoverclas2"
              to="#agencia"
               style={{fontWeight:"700", color: "#fffe00", fontSize:"18px",   textDecoration: "none" }}
            >
              
             <span  >Comunicate con Nosotros
              <i
                className="bi bi-arrow-right"
                style={{ color: "#fffe00",
                fontSize: "25px",
                fontWeight: "700", marginTop: "5px", paddingLeft: "10px" }}
              ></i></span>
            </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionSumate;
