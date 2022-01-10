import React, { useState } from 'react';
import '../componentes/global-styles/estilo.scss'
import { Col, Row, Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { init, sendForm } from 'emailjs-com';
init('user_ERlBBhqIOUeDDIcksWV35');
function SectionContacto() {

 

  

  const { register, handleSubmit, watch, errors } = useForm();

  const [contactNumber, setContactNumber] = useState("000000");
  
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const onSubmit = (data) => {
    // console.log(data);
    generateContactNumber();
    sendForm('default_service', 'template_m974mai', '#contact-form')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        return <Redirect to="/gracias" />
      }, function(error) {
        console.log('FAILED...', error);
      });
      
    
  }


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
                style={{ lineHeight: "1em", fontSize: "60px", color: "#fff", fontWeight: "700" }}
              >
                Si necesitas <br id="b1" ></br>contactarnos <br ></br>dejanos un<br id="b2"></br>{" "}
                mensaje.
              </h1>
              <br></br>
              <h3
                style={{
                  
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

              <Form id='contact-form' action="/gracias" onSubmit={handleSubmit(onSubmit)}  className="formulario-contacto"
                
              >
                <input type='hidden' name='contact_number' value={contactNumber} />
                <Form.Group className="mb-3">
  
                  <Form.Control name="user_name" required maxLength="30"  type="text" placeholder="Nombre" />
                 
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control name="apellido" required maxLength="30" type="text" placeholder="Apellido" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control name="empresa" required maxLength="20"  type="text" placeholder="Empresa" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    required maxLength="12"
                    name="telefono"
                    type="number"
                    placeholder="Número de celular. Ej: +56922222222"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    
                    name='user_email'
                    
                    type="email"
                    placeholder="Correo electrónico. Ej: example@empresa.com"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Text style={{ fontSize: "20px", color: "#FFF" }}>
                    Servicio a Cotizar
                  </Form.Text>
                  <Form.Control required  name="select" as="select" aria-label="Default select example">
                    <option value="DesarrolloWebyEcommerce">Desarrollo Web y Ecommerce</option>
                    <option value="Marketing Digital">Marketing Digital</option>
                    <option value="analiticayPerformance">analitica y Performance</option>
                    <option value="Otros">Otros</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control name='message' required   placeholder="Mensaje" as="textarea" className="textareaa" rows={8} />
                </Form.Group>

                <Button
               
                id="btnContact"
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
