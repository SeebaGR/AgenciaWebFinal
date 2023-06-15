import React, { useState } from 'react';
import { Col, Row, Container, Button } from "react-bootstrap";
import "../global-styles/estilo.scss"

import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import {navigate} from 'gatsby';
import { init, sendForm } from 'emailjs-com';


init('user_ERlBBhqIOUeDDIcksWV35');
function Seccion_mkt7() {

 
  const { register, handleSubmit, watch, errors } = useForm();

  const [contactNumber, setContactNumber] = useState("000000");
  
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const onSubmit = (data) => {
    const btncompra = document.getElementById('btnContact');
    btncompra.disabled = true; 
    generateContactNumber();
    sendForm('default_service', 'template_m974mai', '#contact-form-saber')
      .then(function(response) {
        navigate('/merci');

    
        
      }, function(error) {
        console.log('FAILED...', error);
      });
      
    
  }

  return (

    <div  >
    <div className="ultimasSec" >


<Container>
        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col style={{display:"flex", justifyContent:"center"}} md={7} sm={6} className="uno order-xs-12 order-md-1">
          <div  >
          <h1 className="parrf-noss" >¿Qué lograrás con nosotros?</h1>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Materializarás tu proyecto.</p>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Cumplirás tu meta comercial.</p>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Podrás alcanzar las metas que te propongas.</p>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Contarás con un equipo de soporte.</p>
          </div  >


          </Col>
          <Col  sm={6} md={5} className="dos rosros order-xs-1 order-md-2">
              
          <img
         
          alt="principalpruebas"
          width="100%"

        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/02--_1.jpg?v=1663178502"
      ></img>


          </Col>
        </Row>
      </Container>
      </div>

      <div className="ultimasec22">

      <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
               <Col style={{display:"flex", justifyContent:"center"}}  sm={4} className="uno order-xs-12 order-md-1">
          <div  className="fonte" >
          <h1 className="parrf-tr" >¿Te sumas a nuestra tripulación?</h1>
          <p className="parrf-tr2">Reunámonos a conversar sobre tu proyecto, los plazos de ejecución y los resultados que esperas.</p>
          <p className="parrf-tr2">Mejoremos tu presencia en internet desde hoy.</p>

          <a href="#contact-form-saber"><p className="parrf-tr3">¡Si, llenar formulario!</p></a>

          <img
          className="fotos-note"
      loading="lazy"
          alt="principalpruebas"
          width="100%"

        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/LandingEcommerce_CollageNotebook.png?v=1677266467"
      ></img>


          </div  >


          </Col>

          <Col  sm={4} className="dos order-xs-1 order-md-2">
      
          <div className="formularioultimasec"  >  
          <h3  className="titulo-formularios" >COMPLETA TUS DATOS, TE CONTACTAREMOS EN 24 HORAS HÁBILES</h3>
          <Form id='contact-form-saber' action="/gracias" onSubmit={handleSubmit(onSubmit)}  className="formulario-contacto"
                
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
                    ¿Cuanto presupuesto mensual dispones?
                   
                    </Form.Text>
               
                    <select name="user_select" class="form-control customDropdown">
           
                      <option value="Menos de $2.000 USD ">Menos de $2.000 USD </option>
                      <option value="Más de $4.000 USD">Más de $4.000 USD</option>
                      <option value="Más de $6.000 USD">Más de $6.000 USD</option>
    
                      </select>
              
    
     
    
      
  
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name='message' required   placeholder="Mensaje" as="textarea" className="textareaa" rows={8} />
                  </Form.Group>
                  
                  <Button
                 
                  id="btnContact"
                    type="submit"
                    style={{
                      fontSize:"18px",
                      background: "black",
                            width:"100%",
                      color: "white",
                    }}
                  >
                    Enviar Mensaje{" "}
                    <i
                      className="bi bi-arrow-right"
                      style={{ marginTop:"2px", paddingLeft: "10px", position:"absolute" }}
                    ></i>
                  </Button>
      
                </Form>
                </div  > 
          </Col>
        </Row>


      </div>



    </div>



  );
}

export default Seccion_mkt7;
