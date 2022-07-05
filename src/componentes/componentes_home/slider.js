import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import UseHome from "../../hooks/useHome";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../global-styles/estilo.scss"
import "swiper/css/grid";
import { Grid, Pagination, Navigation, Autoplay } from "swiper";

import { Link } from "gatsby";


const slider = () => {
  const response = UseHome();
  const Datos = response.allStrapiHome.nodes[0].home_seccion6;
  
  return (
    <div className="contenedor-Slider2" >


      


<div className="imagenes-esconder" style={{marginBottom:"30px"}} >
<h1 className="subtituloSobrer" style={{ fontSize: "50px", fontWeight: "700", textAlign:"center" }}>Hemos apoyamos a cientos de marcas</h1> 
<p style={{ fontSize: "17px", textAlign:"center", fontWeight: "300" }}>Trabajamos con más de 60 empresas activamente.</p> 
<p style={{marginTop:"-20px", fontSize: "17px", textAlign:"center", fontWeight: "300" }}>Hemos asesorado a +500 empresas en aumentar sus ventas online. </p> 

      </div>
      <Container>
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
        
          <Col className="pc-for" >
            <Swiper
            id="swiperFFF"
              slidesPerView={6}
              spaceBetween={40}
              navigation={true} modules={[Navigation]}
              autoplay={{
                delay: 500
            }}
              className="mySwiperSlider"
              breakpoints={{
                "360": {
                  "slidesPerView": 2,
                  "spaceBetween": 20
                },
                "400": {
                  "slidesPerView": 2,
                  "spaceBetween": 20
                },
                "640": {
                  "slidesPerView": 2,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 2,
                  "spaceBetween": 40
                },
                "1024": {
                  "slidesPerView": 6,
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
        <div className="pc-for slider-pad" style={{justifyContent:"center", display:"flex", textAlign: "center", paddingTop: "25px" }}>
          <h2 className="tit-movil" style={{ marrginTop:"20px", marginBottom:"20px", fontSize:"28px", fontWeight:"700" }} >¿Quieres conocer nuestros casos de éxito?</h2>
 
        </div>
                 <div  className="pc-for hoverclas2 movil-slider" style={{textAlign:"center", justifyContent:"center"}}>
          <Link to="/contacto"
           className="tit-slider-link"
          style={{
            
                color: "#031FFE",
                fontSize: "18px",
                fontWeight: "700",
                textDecoration: "none",
              }}>
            Solicita portafolio aquí
            &gt;
          </Link>
          </div>
      </Container>
    </div>
  );
};

export default slider;
