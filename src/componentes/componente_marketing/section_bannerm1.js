import React, { useState } from 'react';
import { Col, Row, Container, Button } from "react-bootstrap";

import "../global-styles/estilo.scss"

import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import {navigate} from 'gatsby';
import { init, sendForm } from 'emailjs-com';
init('user_ERlBBhqIOUeDDIcksWV35');
function SectionBannerMkt() {


  const { handleSubmit } = useForm();

  const [contactNumber, setContactNumber] = useState("000000");
  
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const onSubmit = (data) => {
    const btncompra = document.getElementById('btnContact8');
    btncompra.disabled = true; 
    generateContactNumber();
    sendForm('default_service', 'template_m974mai', '#contact-form-mkt')
      .then(function(response) {
        navigate('/gracias');

    
        
      }, function(error) {
        console.log('FAILED...', error);
      });
      
    
  }

  return (
    <div className="fondo-nuevo inicioo">
      <Container className="contenedor-body">
      <Row id="rowSc1">
          <Col md={8}  >
          <h1 className="par-banner">AGENCIA DE MARKETING DIGITAL Y PERFORMANCE</h1>  
            <h4  className="par-banner2">Resolvemos tus problemas de ventas, escalamos tus resultados digitales y maximizamos tu retorno de inversion en internet.</h4>
            <h4  className="par-banner3">¿Conversamos sobre tu proyecto?</h4>
            <h4  className="par-banner4">Completa el formulario de contacto <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></h4>

         
          <Row >
          <Col className="center-cols">
      <img
      loading="lazy"
      width="100%"

          alt="principalpruebas"

  
        src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_Banner1_1_13cd15b8ae.png?v=1658865428"
      ></img>
      </Col>

          </Row >





          </Col>
          <Col md={4} >

          <Form id='contact-form-mkt' action="/gracias" onSubmit={handleSubmit(onSubmit)}  className="forone formulario-contacto"
                
                >
                  <h1 style={{color:"black", fontSize:"18px", marginBottom:"20px"}} >COMPLETA TUS DATOS, TE CONTACTAREMOS EN 24 HORAS HÁBILES</h1>
                  <input type='hidden' name='contact_number' value={contactNumber} />
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      
                      name='user_email'
                      
                      type="email"
                      placeholder="Correo electrónico. Ej: example@empresa.com"
                    />
                  </Form.Group>
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
              
                  <Form.Group className="mb-3">
                    <Form.Text style={{ fontSize: "18px", color: "#9E9EA7" }}>
                    ¿Cuánto presupuesto mensual dispones?

                   
                    </Form.Text>
               
                    <select name="user_select" class="form-control customDropdown">
                      <option  value="Menos de $2.000 USD ">Menos de $2.000 USD </option>
                      <option  value="Más de $4.000 USD">Más de $4.000 USD</option>
                      <option  value="Más de $6.000 USD">Más de $6.000 USD</option>

                      </select>
              
    
     
    
      
  
                  </Form.Group>
            
         
                  <div className="hoverclas2">
                  <Button
                 
                  id="btnContact8"
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
