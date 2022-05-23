import React, { useState } from 'react';
import { Col, Row, Container, Button } from "react-bootstrap";
import UseMkt from "../../hooks/useMkt";
import "../global-styles/estilo.scss"
import "../../componentes/global-styles/layout"
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import {navigate} from 'gatsby';
import { init, sendForm } from 'emailjs-com';
function SectionBannerMkt() {


  const { register, handleSubmit, watch, errors } = useForm();

  const [contactNumber, setContactNumber] = useState("000000");
  
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const onSubmit = (data) => {

    generateContactNumber();
    sendForm('default_service', 'template_m974mai', '#contact-form')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);

        navigate('/gracias/');

    
        
      }, function(error) {
        console.log('FAILED...', error);
      });
      
    
  }

  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion1[0];
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const gift = data.git_capitan[0].url;
 
  return (
    <div className="fondo-nuevo inicioo">
      <Container className="contenedor-body">
      <Row id="rowSc1">
          <Col   >
          <h1 className="par-banner">AGENCIA DE MARKETING DIGITAL Y PERFORMANCE</h1>  
            <h4  className="par-banner2">Resolvemos tus problemas de ventas, escalamos tus resultados digitales y maximizamos tu retorno de inversion en internet.</h4>
            <h4  className="par-banner3">¿Conversamos sobre tu proyecto ?</h4>
            <h4  className="par-banner4">Completa el formulario de contacto</h4>

         
          <Row >
          <Col className="center-cols">
      <img
      loading="lazy"
      width="100%"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652970123/Landing_Ecommerce_Banner1_dafaf89d4c.png"
      ></img>
      </Col>

          </Row >





          </Col>
          <Col >

          <Form id='contact-form' action="/gracias" onSubmit={handleSubmit(onSubmit)}  className="forone formulario-contacto"
                
                >
                  <input type='hidden' name='contact_number' value={contactNumber} />
                  <Form.Group className="mb-3">
    
                    <Form.Control name="user_name" required maxLength="30"  type="text" placeholder="Nombre" />
                   
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name="user_apellido" required maxLength="30" type="text" placeholder="Apellido" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name="user_empresa" required maxLength="20"  type="text" placeholder="Empresa" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      required maxLength="12"
                      name="user_telefono"
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
               
                    <select name="user_select" class="form-control customDropdown">
                      <option value="DesarrolloWebyEcommerce">Desarrollo Web y Ecommerce</option>
                      <option value="Marketing Digital">Marketing Digital</option>
                      <option value="analiticayPerformance">Analitica y Performance</option>
                      <option value="Otros">Otros</option>
                      </select>
              
    
     
    
      
  
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name='message' required   placeholder="Mensaje" as="textarea" className="textareaa" rows={4} />
                  </Form.Group>
                  <div className="hoverclas2">
                  <Button
                 
                  id="btnContact"
                    type="submit"
                    style={{
                      width:"100%",
                      fontSize:"18px",
                      background: "black ",
                      borderColor: "transparent",
                      color: "white",
                    }}
                  >
                    Enviar Mensaje{" "}
                    <i
                      className="bi bi-arrow-right"
                      style={{ marginTop:"2px", paddingLeft: "10px", position:"absolute" }}
                    ></i>
                  </Button>
                  </div>
                </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionBannerMkt;
