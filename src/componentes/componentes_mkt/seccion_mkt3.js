import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../global-styles/estilo.scss"
import UseMkt from "../../hooks/useMkt";

function seccion_mkt3() {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion3[0];
  const imagen = data.imagen_iconos;
  const titulo = data.titulo;
 
  return (
    <div className="cont-mov" style={{ fontFamily: "Brandon, Brandon", background: "#0100ff", paddingTop:"40px", paddingBottom:"40px" }}>
      <Container
       
        
      >
        <Row className="colcol" >
          <Col  style={{display:"flex", alignItems:"center", textAlign: "center" }}>
            <h1 id="mktTf"
              style={{
                textAlign: "left",
                width: "300px",
                color: "#fffe00",
                lineHeight: "1em",
                fontWeight: "700",
                fontSize: "60px",
              }}
            >
              {titulo}
            </h1>
          </Col>

          <Col  sm={6} className="order-xs-12 order-md-1">
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              {imagen.map((item, i) => (
                <Col xs={6} md={6} sm={6} key={i}>
                  <img
                    key={i}
                    alt=""
                    className="mkt-pardes  img img-fluid"
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
}

export default seccion_mkt3;
