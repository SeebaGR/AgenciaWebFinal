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
const sliderReviews = () => {
  const response = UseHome();
  const datos = response.allStrapiHome.nodes[0].home_seccion3[0];
  const imagen_iconos = datos.imagen_iconos;


  
  return (
    <div className="paddslidereviews"   >
<div className="revDiv"  >


<h1    className="somospTitulo  encabezado">Testimonios Sobre nuestro Fundador</h1>
 
 <Swiper id="swiperReviews"  navigation={true} modules={[Navigation, Pagination]}   
              spaceBetween={30} autoplay={{
                delay: 4000
            }}
            modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "360": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "400": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "640": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "768": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "1024": {
            "slidesPerView": 3,
          }
        }}
      
        className="mySwiper" >
        <SwiperSlide>  
        <div >
            <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651235656/Landing_Agencia_Reviews_51_d799097710.png"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651235656/Landing_Agencia_Reviews_56_1178712a06.png"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651235656/Landing_Agencia_Reviews_52_214eb0b78c.png"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651235656/Landing_Agencia_Reviews_55_012bac74b6.png"
                   
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651235656/Landing_Agencia_Reviews_53_f324930b99.png"
               
                  
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651235656/Landing_Agencia_Reviews_54_e319308a6a.png"
                  
                 
                  ></img>
 </SwiperSlide>

        
      </Swiper>

      </div>
    </div>
  );
};

export default sliderReviews;
