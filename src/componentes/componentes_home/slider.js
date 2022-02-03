import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import UseHome from "../../hooks/useHome";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../global-styles/estilo.scss"


import SwiperCore, { Navigation } from "swiper";
import { Link } from "gatsby";

// install Swiper modules
SwiperCore.use([Navigation]);

const slider = () => {
  const response = UseHome();
  const Datos = response.allStrapiHome.nodes[0].home_seccion6;

  return (
    <div className="contenedor-Slider2" >


      
<div class="esconder-titulos">

<h1 className="tit-movil" style={{ fontSize: "34px", fontWeight: "700", textAlign:"center" }}>Confían en Nosotros</h1> 
<p style={{ fontSize: "17px", textAlign:"center", fontWeight: "300" }}>Junto a nuestros clientes estamos colaborando  activamente en proyectos que buscan potenciar su presencia en internet y sacar el máximo partido del mundo digital.</p> 

 
  

</div>

<div style={{marginBottom:"30px", display:"flex", justifyContent:"center"}} >
      <img loading="lazy" 
        style={{  textAlign: "center", width: "60%" }}
        className="lazyload img imagenes-esconder img-fluid"
        src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643137726/confiaennosotros_ldgavp.jpg"
        alt=""
      ></img>
      </div>
      <Container>
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Col sm={4} style={{  textAlign: "center" }}>
            <img loading="lazy" 
              className="lazyload img imagenes-esconder img-fluid"
              src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643859384/sliderpart_obrdmb_1c7f552e53.webp"
              alt=""
            ></img>
          </Col>
          <Col sm={6}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              navigation={true}
              className="mySwiperSlider"
              breakpoints={{
                "360": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "400": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "640": {
                  "slidesPerView": 2,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 4,
                  "spaceBetween": 40
                },
                "1024": {
                  "slidesPerView": 3,
                }
              }}
            >
              {Datos.map((item, i) => (
                <SwiperSlide key={i}>
                  <a href={item.link1} key={i}>
                    <img loading="lazy" 
                      key={i}
                      className="imsld-fin img-slider-movil img-fluid"
                      width={203}
                      height={203}
                      src={item.imagen1[0].url}
                      alt=""
                    ></img>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
        <div className="slider-pad" style={{justifyContent:"center", display:"flex", textAlign: "center", paddingTop: "25px" }}>
          <h2 className="tit-movil" style={{ marrginTop:"20px", marginBottom:"20px", fontSize:"28px", fontWeight:"700" }} >¿Quieres conocer nuestros casos de éxito?</h2>
 
        </div>
                 <div  className=" hoverclas2 movil-slider" style={{textAlign:"center", justifyContent:"center"}}>
          <Link to="/contacto"
           className="tit-slider-link"
          style={{
            
                color: "#031FFE",
                fontSize: "18px",
                fontWeight: "700",
                textDecoration: "none",
              }}>
            Solicita portafolio aquí
            <i
                    className="bi bi-arrow-right"
                    style={{ marginTop:"3px", paddingLeft: "3px", position:"absolute" }}
                  ></i>
          </Link>
          </div>
      </Container>
    </div>
  );
};

export default slider;
