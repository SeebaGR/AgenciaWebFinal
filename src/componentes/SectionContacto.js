import React from "react";
import '../componentes/global-styles/estilo.scss'
import { Col, Row, Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "gatsby";
function SectionContacto() {
  return (
    <div>
      <div style={{ background: "#FA5983" }}>
        <Container
          style={{ padding: "60px 0 50px" }}
          className="contenedor-body"
        >
          <Row>
            <Col sm={6}>
              <h1 id="scContactoT"
                style={{ lineHeight:"1.1rm", fontSize: "60px", color: "#fff", fontWeight: "700" }}
              >
                Si necesitas <br id="b1" ></br>contactarnos <br ></br>dejanos un<br id="b2"></br>{" "}
                mensaje.
              </h1>
              <br></br>
              <h3 
                style={{
                  paddingLeft: "20px",
                  paddingBottom: "20px",
                  color: "#fffe00",
                  fontSize: "27px",
                  lineHeight: "1.1em",
                  fontWeight: "700",
                }}
              >
                Te responderemos dentro de 72 horas<br></br> hábiles
              </h3>
            </Col>
            <Col sm={6}>
            
              <Form method="post"  netlify-honeypot="bot-field" data-netlify="true" name="contact" className="formulario-contacto"
                action="/gracias"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <Form.Group className="mb-3">
                  <Form.Control name="nombre" type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control  name="apellido" type="text" placeholder="Apellido" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control name="empresa" type="text" placeholder="Empresa" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                  name="telefono"
                    type="number"
                    placeholder="Número de celular. Ej: +56922222222"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                  name="email"
                    type="email"
                    placeholder="Correo electrónico. Ej: example@empresa.com"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Text style={{ fontSize: "20px", color: "#FFF" }}>
                    Servicio a Cotizar
                  </Form.Text>
                  <Form.Control  name="select" as="select" aria-label="Default select example">
                    <option value="DesarrolloWebyEcommerce">Desarrollo Web y Ecommerce</option>
                    <option value="Marketing Digital">Marketing Digital</option>
                    <option value="analiticayPerformance">analitica y Performance</option>
                    <option value="Otros">Otros</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control name="mensajes" placeholder="Mensaje" as="textarea" rows={3} />
                </Form.Group>
     
                <Button
                  type="submit"
                  style={{
                    background: "transparent",
                    borderColor: "transparent",
                    color: "rgb(255, 254, 0)",
                  }}
                >
                  Enviar Mensaje{" "}
                  <i
                    className="bi bi-arrow-right"
                    style={{ marginTop: "5px", paddingLeft: "10px" }}
                  ></i>
                </Button> 

              </Form>
               
             
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SectionContacto;
