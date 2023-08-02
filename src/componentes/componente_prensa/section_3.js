import React from "react";
import "../global-styles/layout";
import { Col, Row, Container } from "react-bootstrap";
import UsePrensa from "../../hooks/usePrensa";

const section3 = () => {
    const response = UsePrensa();
    const data = response.allStrapiPrensa.nodes[0];
  
    const Imagenfinal = data.link_banner_final_prensa;

  
   
    return (
      <div>
        <Container style={{padding:"20px",display:"flex", background:"#0100ff", borderRadius:"5px"}}>
        <Col style={{display:"flex"}} sm={6}>
        <img
      loading="lazy"
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/phone_1e3a4b6e-36a5-4124-a6e6-3a78951ce055.png?v=1690985338"
      ></img>
        </Col>
        <Col style={{display:"grid", alignItems:"center",justifyContent:"center"}} sm={6}>
        <div>
        <h1>¿Estás buscando aumentar tus ventas online?</h1>
        <a>Contáctanos</a></div>
        </Col>
        </Container>
      </div>
    );
  };
  
  export default section3;