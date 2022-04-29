import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
import '../global-styles/estilo.scss'
function sectionAgencia() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion2[0];
  const titulo = data.titulo;
  const ImagenSection = data.imagen_titulo[0].url;
  const ImgenesAds = data.imagen_ads;
  const ImagenPartners = data.imagen_partners;

  return (
    <div id="agencia-marketing" className="agn-baner" >
      <div style={{ textAlign: "center" }}>

      <div class="esconder-titulos">

      <h1 className="txt-Tagencia" >Agencia Los Navegantes.</h1> 
        <p className="parrafos-movil" style={{ fontSize: "20px", fontWeight: "700" }}>Especialistas en Marketing Digital, Analítica Web & Performance.</p> 
        

      </div>

      <div style={{marginBottom:"20px"}} className=" imagenes-esconder sb-div" >
<div>
</div>
<img className="img-sabermas" loading="lazy" style={{  position:"absolute", left:"27%",  width: "7%"  }} alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651249228/Captura_de_pantalla_2022_04_29_122018_9ce96328e9.jpg" ></img>

<div style={{ paddingBottom:"40px" }} >
<h1 className="subtituloSobrer" style={{ fontSize: "50px", fontWeight: "700" }}>Agencia Los Navegantes.</h1> 

<p style={{textAlign:"center"}} className="parrafoSaber">Especialistas en Marketing Digital, Analítica Web & Performance.</p>

</div>
<img className="img-sabermas" loading="lazy" style={{ position:"absolute", right: "27%",  width: "5%"  }} alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646625235/circulos_eggns2.webp" ></img>

<div>
</div>
</div>

       
        <Container  className="contenedor-bodyp">
          <Row className="row-agenci" >
            {ImgenesAds.map((item, i) => (
              <Col style={{ display:"flex", alignItems:"center" }} xs={6} md={2} sm={2} key={i}>
                <img
                alt=""
                loading="lazy"
                  key={i}
                  className="mkt-pardes lazyload img img-fluid"
                
                  src={item.url}
                ></img>
              </Col>
            ))}
            
          </Row>

        </Container>

        <h1  className="txt-Tagencia agn2">{titulo}</h1>
        <Container className="contenedor-bodyp">
        <Row style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
            {ImagenPartners.map((item, i) => (
              <Col xs={6} md={2} sm={2} key={i}>
                <img
                alt=""
                loading="lazy"
                width={150}
                height={84}
                  key={i}
                  className="ll-ll lazyload img img-fluid"
                  
                  src={item.url}
                ></img>
              </Col>
            ))}
            
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default sectionAgencia;
