import React from "react";
import "../global-styles/estilo.scss"
import { Container, Row, Col } from "react-bootstrap";


const seccionMkt2 = () => {



  return (
    <div  className="cont-mov" style={{ backgroundColor: "white", paddingTop:"60px", paddingBottom:"60px" }}>
      <Container  >
        <Row
          className="giro justify-content-center "
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col style={{display:"flex", justifyContent:"end"}} md={6} sm={6} className="uno order-xs-12 order-md-1">
          <div className="fortwo"  >
          <h1 className="parru-mkt">¿TUS RESULTADOS NO SON LOS QUE ESPERAS?</h1>
          <h1 className="parru-mkt2">Nos especializamos por crear estrategias digitales de alto impacto en Facebook e Instagram Ads, Google Ads, Tik Tok Ads, eMail Marketing y SEO.</h1>
          <h1 className="parru-mkt3">Hemos administrado más de 10 millones de dólares en pauta publicitaria y hemos asesorado a +700 ecommerce en la implementación de campañas de marketing digital con foco a performance.</h1>
          <h1 className="parru-mkt4">Actualmente formamos parte de Google Partners Premier 2023 y somos una de las empresas destacadas en su programa de aceleradoras de agencias en Latam.</h1>
          <br></br>
          <a
            id="btndescubri"
              href="#contact-form-saber"
             className="btn-dscaq"
            >
            Descubre mas aquí &gt;
            </a>
            </div  >

          </Col>
          <Col  sm={6} md={6} className="center-cols dos order-xs-1 order-md-2">
              
          <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="90%"
        key="id1"
        className="lazyload img "
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-JULIO-SEM04-COLLAGE1_3.png?v=1690928859"
      ></img>


          </Col>
        </Row>
      </Container>

      

    </div>
  );
};

export default seccionMkt2;
