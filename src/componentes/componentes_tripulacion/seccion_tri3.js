import React from "react";
import { Link } from "gatsby";
import { Col, Row, Container } from "react-bootstrap";
import UseTri from "../../hooks/useTripulacion";
import "../global-styles/layout";
function seccionTri3() {
  const response = UseTri();
  const data = response.allStrapiTripulacion.nodes[0].tripulacion_seccion11;
  

  return (
    <div>
      <Container>
        
      <div class="esconder-titulos">

<h1 style={{ textAlign:"center", fontSize: "40px", fontWeight: "700" }}>Nuestro Equipo</h1> 
  <p style={{ textAlign:"center", fontSize: "20px", fontWeight: "300" }}>Nuestras ideas rompen la barrera de lo <br/> físico y viajan a través de internet para <br/> construir relaciones sólidas con audiencias y <br/> brindar experiencias únicas e interactivas.  </p> 
  

</div>
        <Col>
       
          <Row id="cnt-tripulacion" style={{ justifyContent: "center", alignItems: "center" }}>
            {data.map((item, i) => (
              <Col
                style={{ marginBottom: "20px" }}
                className="div-imagen"
                lg={3}
                key={i}
              >
                <img
                  style={{ borderRadius: "20px" }}
                  key={i}
                  className="desvanecer"
                  src={item.imagen.url}
                  width={300}
                  alt=""
                ></img>
                <Container id="tripulacion-cards"
                  style={{ marginTop: "100px", height: "100%", width: "91%" }}
                  className="contain"
          
                >
                  <p style={{ marginTop: "100px" }} className="nombreEquipo">
                    {item.nombre}
                  </p>
                  <p className="descripcionEquipo">{item.ocupacion}</p>
                  <h1 style={{ letterSpacing: "10px" }}>
                    <Link className="links" to={item.link_insta}>
                      <i id="iconos" className="bi bi-instagram"></i>
                    </Link>
                    <Link to={item.linkenid}>
                      <i id="iconos" className="bi bi-linkedin"></i>
                    </Link>
                  </h1>
                  <p
                    className="descripcionEquipo"
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    {item.descripcion}
                  </p>
                </Container>
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default seccionTri3;
