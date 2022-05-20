import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../global-styles/estilo.scss"
import UseMkt from "../../hooks/useMkt";
import Slidermkt from "../componentes_home/slidertMkt4";
import Slidermkt2 from "../componentes_home/slidermkt2";

function seccion_mkt4() {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion3[0];
  const imagen = data.imagen_iconos;
  const titulo = data.titulo;
 
  return (
    <div  >
        
        <div style={{paddingTop:"60px", background:"#E1E2E4"}}>
        <h1 className="primerParf">INCREMENTEMOS EL FLUJO DE CLIENTES <br /> Y FACTURACIÓN DE TU NEGOCIO</h1>



        <Container className="contain-mkt4" id="mkt-pc" >
        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col style={{ display:"flex", justifyContent:"center" }}  sm={6} className="uno order-xs-12 order-md-1">
          <div >
          <h2 className="primerParfLeft">IMPLEMENTACION DE CAMPAÑAS<br /> DE MARKETING DIGITAL</h2>
          <p>Hemos asesorado a +500 empresas en la<br /> implementación de campañas en Facebook e<br /> Instagram Ads, Google Ads, Youtube Ads, Email<br /> Marketing, Analitica Web y Performance</p>
          </div>

          </Col>
          <Col  sm={6} className="dos order-xs-1 order-md-2">
              

          <Slidermkt></Slidermkt>

          </Col>
        </Row>
      </Container>
      </div>
      


<div className="cont-mov" style={{ fontFamily: "Brandon, Brandon", background: "#e1e2e4", paddingTop:"40px",paddingBottom:"40px"}}>
      <Container>

      <Row>
    <Col id="iconss-iconss"  style={{ display:"flex", justifyContent:"center" }}>
    
    <div >
    <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="90%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652976309/Landing_Ecommerce_Embudo_21_b7ac0750f9.png"
      ></img>

   
  </div>

  <div >
  <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="90%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652976309/Landing_Ecommerce_Embudo_22_7a9ec21374.png"
      ></img>

  </div>

  <div style={{display:"flex", alignItems:"center"}}>

  <div >
  <h2 className="primerParfLeft">IMPLEMENTACION DE CAMPAÑAS<br /> DE MARKETING DIGITAL</h2>
          <p>Hemos asesorado a +500 empresas en la<br /> implementación de campañas en Facebook e<br /> Instagram Ads, Google Ads, Youtube Ads, Email<br /> Marketing, Analitica Web y Performance</p>
          </div > 
  </div>

    </Col>
  </Row>
 </Container>
    </div>



    <div className="cont-mov" style={{ background: "#290078", paddingTop:"40px", paddingBottom:"40px" }}>
 

     
    <Col style={{display:"flex", justifyContent:"center"}}>

    <div >
    <h1 style={{textAlign:"center"}} className="cont-par-cont" >GENERAMOS ESTRATEGIAS DE ALTO IMPACTO</h1>
    <h1 style={{textAlign:"center"}} className="cont-par-cont2" >AUMENTAR EL RETORNO DE INVERSIÓN PARA TU NEGOCIO</h1>
          <h3 style={{textAlign:"center"}} className="cont-par-cont" >ES NUESTRO TRABAJO</h3></div>
    </Col>
 



  
    
    </div>

    <div className="cont-mov" style={{ textAlign:"center", fontFamily: "Brandon, Brandon"}}>
 

     
 

    <Slidermkt2></Slidermkt2>


 
 </div>





    </div>
  );
}

export default seccion_mkt4;
