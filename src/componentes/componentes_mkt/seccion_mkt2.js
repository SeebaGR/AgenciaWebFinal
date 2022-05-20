import React from "react";
import "../global-styles/estilo.scss"
import { Container, Row, Col } from "react-bootstrap";
import UseMkt from "../../hooks/useMkt";
import 'font-awesome/css/font-awesome.min.css';
const seccionMkt2 = () => {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion2[0];
  const descripcion = data.descripcion;
  const descripcion2 = data.descripcion2;
  const imagen_iconos = data.imagen_iconos;
  const titulo = data.titulo;


  return (
    <div  className="cont-mov" style={{ backgroundColor: "white", paddingTop:"60px", paddingBottom:"60px" }}>
      <Container id="mkt-pc" >
        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col style={{display:"flex", justifyContent:"end"}}  sm={6} className="uno order-xs-12 order-md-1">
          <div style={{width:"80%", marginRight:"30px"}}  >
          <h1 className="parru-mkt">¿TUS RESULTADOS NO SON LOS QUE ESPERAS?</h1>
          <h1 className="parru-mkt2">Nos especializamos por crear estrategias digitales de alto impacto en Facebook e Instagram Ads, Google Ads, eMail Marketing y SEO.</h1>
          <h1 className="parru-mkt3">Hemos administrado más de 7 millones de dolares en pauta publicitaria y hemos asesorado a +500 ecommerce en la implementacion de campañas de marketing digital con foco a performance.</h1>
          <h1 className="parru-mkt4">Actualmente formamos parte de Google Partners Premier y somos una de las empresas destacadas en su programa de aceleradoras de agencia en Latam.</h1>
          <a
              
              href="/contacto"
              style={{
                
                color: "#250077",
                fontSize: "18px",
                fontWeight: "700",
                textDecoration: "none",
                textAlign: "left",
              }}
            >
              <p style={{marginRight:"20px"}} className="cnvMkt2" >
                Descubre mas aquí &gt;
              </p>
            
            
            </a>
            </div  >

          </Col>
          <Col  sm={6} className="dos order-xs-1 order-md-2">
              
          <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="90%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652970828/Landing_Ecommerce_Collage_2a27d8ba9d.png"
      ></img>


          </Col>
        </Row>
      </Container>

      <Container id="mkt-movil" className="contenedor-body">
        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
      <Col  sm={6} className="dos order-xs-12 order-md-1">
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              {imagen_iconos.map((item, i) => (
                <Col xs={6} md={6} sm={6} key={i}>
                  <img
                  alt=""
                    key={i}
                    className="lazyload img img-fluid"
                    src={item.url}
                    width={300}
                  ></img>
                </Col>
              ))}
            </Row>
          </Col>
          <Col  sm={6} className="uno order-xs-1 order-md-2">
            <h1 style={{fontWeight:"700"}} className="tituloseccion2Mkt">{titulo}</h1>
            <p
            className="parrafos-movil"
              style={{
                paddingTop: "20px",
                paddingBottom: "20px",
                color: "#000",
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              {descripcion}
            </p>
            <p
            className="parrafos-movil"
              style={{ color: "#000", fontSize: "20px", textAlign: "justify" }}
            >
              {descripcion2}
            </p>
            <a
              href="/contacto"
              className="conver-text"
              style={{
                color: "#fffe00",
                fontSize: "25px",
                fontWeight: "700",
                textDecoration: "none",
                textAlign: "right",
              }}
            >
              <p className="cnvMkt2" >
                Conversemos &gt;
                 
              </p>
            </a>
          </Col>
       
          
        </Row>
      </Container>

    </div>
  );
};

export default seccionMkt2;
