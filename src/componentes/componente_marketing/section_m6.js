import React, { useState } from 'react';
import { Col, Row, Container, Button } from "react-bootstrap";
import "../global-styles/estilo.scss"
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "react-bootstrap/Card";
import Video2 from "../componente_marketing/videofre3"
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Navigation } from "swiper";
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import {navigate} from 'gatsby';
import { init, sendForm } from 'emailjs-com';
import UsePrensa from "../../hooks/usePrensa"

init('user_ERlBBhqIOUeDDIcksWV35');
function Seccion_mkt7() {

  const response = UsePrensa();
  const data = response.allStrapiPrensa.nodes[0].blog_prensa;
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

    
<div className="contenedorSlidernuevo"  >
<div style={{ marginBottom:"30px", textAlign:"center"}}>
<h1 className="petitulo">Prensa y Entrevistas</h1>
<p className="pepesub pc-for">Conoce más sobre nuestro trabajo a través de artículos de prensa, <br></br> entrevistas e invitaciones a múltiples canales de Youtube.</p>
<p className="pepesub movil-for">Conoce más sobre nuestro trabajo a través de artículos de prensa, entrevistas e invitaciones a múltiples canales de Youtube.</p>

</div>




<Swiper id="swiperMkt" navigation={true}
       
      

        modules={[Pagination]}
        className="mySwiper feropi"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}

      >
        <SwiperSlide>


        <Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/001.png?v=1691017879" />
<Card.Body id="ccccc2" className="card-body-post" >
 <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>La Tercera</span>
  <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
  ¿Cómo hacer una campaña de marketing digital? | Agencia Los Navegantes
  </Card.Title>
</Card.Body>
</Card>
 

        </SwiperSlide>

        <SwiperSlide>


        <Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/002.png?v=1691017879" />
<Card.Body id="ccccc2" className="card-body-post" >
 <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Las Últimas Noticias</span>
  <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
  Fundadores de Agencia Los Navegantes cuentan cómo crearon su empresa. 
  </Card.Title>
</Card.Body>
</Card>

        </SwiperSlide>
        <SwiperSlide>

        <Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/003.png?v=1691017879" />
<Card.Body id="ccccc2" className="card-body-post" >
 <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>La Serena</span>
  <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
  Agencia Los Navegantes junto a Municipio ayudan a fortalecer las ventas online en las Pymes.
  </Card.Title>
</Card.Body>
</Card>

        </SwiperSlide>
        <SwiperSlide>


        <Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/004.png?v=1691017879" />
<Card.Body id="ccccc2" className="card-body-post" >
 <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>ElDía</span>
  <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
  Agencia Los Navegantes y Matías Villanueva en Diario el Día, La Serena.
  </Card.Title>
</Card.Body>
</Card>
 

        </SwiperSlide>
        <SwiperSlide>



        <Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/005.png?v=1691017879" />
<Card.Body id="ccccc2" className="card-body-post" >
 <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Vilma Nuñez</span>
  <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
  Matías Villanueva entrevista a Vilma Nuñez, experta en Marketing Digital.
  </Card.Title>
</Card.Body>
</Card>

          
       

        </SwiperSlide>
        <SwiperSlide>
        <Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/006.png?v=1691017879" />
<Card.Body id="ccccc2" className="card-body-post" >
 <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Red de Mentores UST</span>
  <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
  Cuáles son las claves para emprender en le mundo digital  | Matías Villanueva
  </Card.Title>
</Card.Body>
</Card>
       

        </SwiperSlide>
        <SwiperSlide>
        <Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/007.png?v=1691017879" />
<Card.Body id="ccccc2" className="card-body-post" >
 <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Impulso Chileno</span>
  <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
  Curso gratuito de Marketing Digital con Matías Villanueva y Academia Metrics.
  </Card.Title>
</Card.Body>
</Card>  


        </SwiperSlide>

      </Swiper>




</div>


<div style={{background:"#5d57dd", paddingTop:"40px", paddingBottom:"40px"}}>
  <Row className="rowrawrew" >
    <Col>
    <div  className="fonte" >
          <h1 className="parrf-tr" >¿Te sumas a nuestra tripulación?</h1>
          <p className="parrf-tr2">Reunámonos a conversar sobre tu proyecto, los plazos de ejecución y los resultados que esperas.</p>
          <p className="parrf-tr2">Mejoremos tu presencia en internet desde hoy.</p>

          <a href="#contact-form-saber"><p className="parrf-tr3">¡Si, llenar formulario!</p></a>
<div>
          <Video2></Video2>
</div>
          </div  >

    </Col>
    <Col>
    <div className="formularioultimasec"  >  
          <h3  className="titulo-formularios" >COMPLETA TUS DATOS, EN MENOS DE 24 HORAS HÁBILES</h3>
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
