import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import UseHome from "../../hooks/useHome";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../global-styles/estilo.scss"


import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import { Link } from "gatsby";

// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
const slidermkt = () => {
  const response = UseHome();
  const datos = response.allStrapiHome.nodes[0].home_seccion3[0];
  const imagen_iconos = datos.imagen_iconos;


  
  return (
    <div  >
 <Container>
 
 <Swiper id="swiperMkt" navigation={true}     slidesPerView={1}
       
       pagination={{
        clickable: true,
      }}
        modules={[Pagination]}

        className="mySwiper swipp" >
        <SwiperSlide>  
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655322814/Landing_Agencia_Casos_MKT_16_d54048e21b.png"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655322814/Landing_Agencia_Casos_MKT_17_e114d16855.png"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655322813/Landing_Agencia_Casos_MKT_12_604d819ef0.png"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655322814/Landing_Agencia_Casos_MKT_13_a4f9e276df.png"
                   
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655322814/Landing_Agencia_Casos_MKT_14_2adc61acba.png"
               
                  
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655322814/Landing_Agencia_Casos_MKT_14_2adc61acba.png"
               
                  
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                  
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655322814/Landing_Agencia_Casos_MKT_15_d9383012ab.png"
                  
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                  
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655322818/Landing_Agencia_Casos_MKT_18_2fd6ac3d63.png"
                  
                 
                  ></img>
 </SwiperSlide>

        
      </Swiper>

</Container>
    </div>
  );
};

export default slidermkt;
