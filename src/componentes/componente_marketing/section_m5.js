import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../global-styles/estilo.scss"
import SliderMmkt from "../componente_marketing/Slider/SliderRmkMovil"
import SliderFmkt from "../componente_marketing/Slider/sliderRmkt"
import Slidermkt3 from "../componente_marketing/Slider/sliderMkt3";
import SliderReviews from "../componente_marketing/Slider/sliderReviews"
function seccion_mkt5() {

 
  return (
    <div  >
        
        <SliderFmkt></SliderFmkt>
        <SliderMmkt></SliderMmkt>
  
        <Container  >
        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col  sm={6} className="paddfe uno order-xs-12 order-md-1">

          <h1 className="pp-far" >¿CUÁL ES NUESTRA GARANTÍA?</h1>
          <p className="pp-far2">Diseñamos, desarrollamos e implementamos las mejores prácticas para ayudarte a vender más.</p>
          <p className="pp-far3">NUESTRA GARANTÍA ES DARTE SEGURIDAD MIENTRAS HACES CRECER TU NEGOCIO.</p>
          <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="90%"
        key="id1"
        className="lazyload img "
        src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_MV_b75426856e_d334d9ed-a97c-4b5d-a1b2-9255a6971e9c.png?v=1658868761"
      ></img>


          </Col>
          <Col  sm={6} className="dos order-xs-1 order-md-2">
              
          <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="90%"
        key="id1"
        className="lazyload img "
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Landing_Ecommerce_Mock_Up.png?v=1690929335"
      ></img>


          </Col>
        
        </Row>


        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
      <Col  sm={6} style={{paddingTop:"20px"}} className="movil-for order-xs-1 order-md-1">

<h1 className="pp-far">¿POR QUÉ TRABAJAR CON NOSOTROS?</h1>
<p className="pp-far2">Nos enfocamos en ofrecer una atención de calidad y un servicio que cumpla tus expectativas.</p>
<p className="pp-far3">TRABAJAR CON NOSOTROS TE ABRIRÁ LA PUERTA A NUEVAS OPORTUNIDADES DE CRECIMIENTO</p>
<img
loading="lazy"
style={{paddingTop:"1%"}}
alt="principalpruebas"
width="90%"
key="id1"
className="lazyload img "
src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_VT_39bb86691a_2ab846a0-bdcf-4171-a95c-a20ea472c8de.png?v=1658868760"
></img>


</Col>

<Col  sm={6} className=" order-xs-2 order-md-1">
              
          <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="90%"
        key="id1"
        className="lazyload img "
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/LandingEcommerce_Mockup2.png?v=1690929335"
      ></img>


          </Col>



          <Col  sm={6} className="pc-for order-xs-1 order-md-2">

<h1 className="pp-far">¿POR QUÉ TRABAJAR CON NOSOTROS?</h1>
<p className="pp-far2">Nos enfocamos en ofrecer una atención de calidad y un servicio que cumpla tus expectativas.</p>
<p className="pp-far3">TRABAJAR CON NOSOTROS TE ABRIRÁ LA PUERTA A NUEVAS OPORTUNIDADES DE CRECIMIENTO</p>
<img
loading="lazy"
style={{paddingTop:"1%"}}
alt="principalpruebas"
width="90%"
key="id1"
className="lazyload img "
src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_VT_39bb86691a_2ab846a0-bdcf-4171-a95c-a20ea472c8de.png?v=1658868760"
></img>


</Col>
          
        </Row>



      </Container>

      <div style={{ display:"flex", justifyContent:"center", paddingTop:"40px", paddingBottom:"40px" }}>

      <a
            className="boton-mkt5"
              href="#contact-form-saber"
              style={{
     
               
                
          
                textDecoration: "none",
              }}
            >
              QUIERO SABER MÁS
            </a>
      
    

      </div>
      <div style={{background:"#290078", height:"20px", width:"100%"}}></div >


      <div className="secse" style={{ background:"#E1E2E4"}}>
    



        <Container className="contain-mkt4"  >
        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col style={{ display:"flex", justifyContent:"end" }}  sm={6} className="uno order-xs-12 order-md-1">
          <div className="llMV" >
          <h2 className="parrafo-mkt5">SOMOS UNA AGENCIA CERTIFICADA</h2>
          <p className="subparrafo-mkt5">Podemos ser tu partner estratégico para lograr resultados reales y medibles y escalables en el tiempo.</p>
          <p className="subparrafo-mkt5">Actualmente somos Google Partners y Facebook Partners, contamos con diferentes certificaciones oficiales, pero lo más importante es que nos avala experiencia real y resultados de alto impacto en Google Ads y Facebook Ads.</p>
          </div>

          </Col>
          <Col  sm={6} className="sldmkt3f dos order-xs-1 order-md-2">
              

          <Slidermkt3></Slidermkt3>

          </Col>
        </Row>
    

        <Container className="oopsk"
        style={{   display: "flex",
            justifyContent: "center"}}
        
       >
 
           <Col id="par-gp" xs={6} md={6} sm={6} style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign: "center" }}>
           <img
       loading="lazy"

           alt="principalpruebas"
           width="100%"
              className="imgpargp"
         src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_logo_Partner_31_80794ff347.png?v=1658868856"
       ></img>
              <img
       loading="lazy"
   
           alt="principalpruebas"
           width="100%"
           className="imgpargp"
         src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/LandingEcommerce_logoPartner-32_b00cec05-3f2d-49c6-8514-c570c0974ea3.png?v=1677185798"
       ></img>
              <img
       loading="lazy"
  
           alt="principalpruebas"
           width="100%"
           className="imgpargp"

         src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_logo_Partner_33_5a568642a4.png?v=1658868856"
       ></img>
              <img
       loading="lazy"
    
           alt="principalpruebas"
           width="100%"
    
           className="imgpargp"
         src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_logo_Partner_34_95593538c5.png?v=1658868856"
       ></img>
           <img
       loading="lazy"
    
           alt="principalpruebas"
           width="100%"
    
           className="imgpargp"
         src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/LandingEcommerce_logoPartner_-45.png?v=1660746182"
       ></img>
           <img
       loading="lazy"
    
           alt="principalpruebas"
           width="100%"
    
           className="imgpargp"
         src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/LandingEcommerce_logoPartner_-46.png?v=1660746182"
       ></img>
           </Col>
 

 
       </Container>


      </Container>
      </div>


      <div className="versc5" >
      <Col>
    <h1 className="parrafos-anuncio" >¡Creamos anuncios que venden!</h1>
          <p className="parrafos-anuncio2"  >CONSEGUIMOS EL MÁXIMO ROAS DE TU INVERSIÓN EN ADS</p>
          <img
       loading="lazy"

           alt="principalpruebas"
           width="100%"
  
         className="lazyload img "
         src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Landing_Ecommerce_Anuncios_que_venden_1.png?v=1691079755"
       ></img>
    </Col>
</div>

<div style={{paddingTop:"40px", paddingBottom:"40px", background:"#DEDCEC"}}>
<SliderReviews id="slider-rew"></SliderReviews>
</div>

<div className="versc6">
<Row>
<Col md={5} sm={6} className="loplop" >

<img
       loading="lazy"

           alt="principalpruebas"
           width="70%"
  
         className="lazyload img "
         src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Correcciones_Landing_Capitan_copy_4c6a8eb348_1.png?v=1691079662"
       ></img>

</Col>



<Col md={6} style={{ display:"flex", justifyContent:"center", alignItems:"center" }}  sm={6} className="uno order-xs-12 order-md-1">
          <div className="forsolos2">
          <h1 className="parrafos-exp" >Conversemos sobre tus objetivos y naveguemos juntos a ese horizonte.</h1>
          <p className="parrafos-exp2"  >Nuestra tripulación te acompañará en el proceso para resolver tus problemas de ventas, escalar tus resultados digitales y maximizamos tu retorno de inversión en Internet.</p>
        
          </div>

          </Col>



</Row>
</div>



    </div>
  );
}

export default seccion_mkt5;
