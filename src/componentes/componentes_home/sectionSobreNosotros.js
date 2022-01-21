import React from "react";
import "../global-styles/estilo.scss"
import { Link } from "gatsby";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
function sectionSobreNosotros() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion9[0];
  return (
    <div className="cont-mov" style={{ padding:"40px", background: "#FA5883"}}>
      <Container >
        <Row >
          <Col className="sc-refresh" sm={6}>
            <h1 className="tituloSobrer" style={{ lineHeight:"1em", color: "#fff", fontSize: "60px", fontWeight:"700" }}>{data.titulo}</h1>
            <h2 className="subtituloSobrer" style={{ color: "#fffe00", fontSize: "45px",fontWeight:"700" }}>
              {data.titulo2}
            </h2>
            <p className="parrafos-movil"
              style={{lineHeight:"1em", fontSize: "20px", textAlign: "justify", color: "#fff" }}
            >
              {data.descripcion1}
            </p>
            <p className="parrafos-movil"
              style={{lineHeight:"1em", fontSize: "20px", textAlign: "justify", color: "#fff" }}
            >
              {data.descripcion2}
            </p>
            <p className="parrafos-movil"
              style={{lineHeight:"1em", fontSize: "20px", textAlign: "justify", color: "#fff" }}
            >
              {data.descripcion3}
            </p>
            <div style={{ marginTop:"30px" }} className="hoverclas2" >
              
            <Link
            
              to="tripulacion"
              className="texto-link"
            >
              <span > 
Conoce la Tripulación <i
                    className="bi bi-arrow-right"
                    style={{ marginTop:"3px", paddingLeft: "3px", position:"absolute" }}
                  ></i></span>
              
            </Link>
            </div>
          </Col>
          <Col style={{display:"flex", alignItems:"center", justifyContent:"center"}} sm={6} >
            <div style={{textAlign:"center"}}>
            <img style={{ width: "80%", textAlign: "center" }} src={data.imagen[0].url} className="lazyload img img-fluid" alt=""></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default sectionSobreNosotros;
