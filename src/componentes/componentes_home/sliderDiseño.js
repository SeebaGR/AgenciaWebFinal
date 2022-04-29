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
const sliderDiseño = () => {
  const response = UseHome();
  const datos = response.allStrapiHome.nodes[0].home_seccion3[0];
  const imagen_iconos = datos.imagen_iconos;


  
  return (
    <div  >
 <Container>
 
 <Swiper id="swiperDiseño"  navigation={true} modules={[Navigation]}   slidesPerView={1}
       
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        modules={[Pagination]}
        className="mySwiper swipp" >
        <SwiperSlide>  
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img
                  
                  loading="lazy"
                  alt=""
             
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651162466/Landing_Agencia_Mockup_Ecommerce_copy_2_012c1226b3.png"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  loading="lazy"
                  alt=""
             
                    className="lazyload mmimm  img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651162448/Landing_Agencia_Mockup_Ecommerce_copy_2a664f6d7c.png"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
             
                    className="lazyload  mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651162452/Landing_Agencia_Mockup_Ecommerce_39_6f8308a210.png"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
              
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651162450/Landing_Agencia_Mockup_Ecommerce_40_0180b2bf0e.png"
                   
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                 
                    className="lazyload mmimm  img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651162465/Landing_Agencia_Mockup_Ecommerce_41_e186992a89.png"
               
                  
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
              
                    className="lazyload mmimm  img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651162448/Landing_Agencia_Mockup_Ecommerce_42_463e14fa7d.png"
                  
                 
                  ></img>
 </SwiperSlide>
 
        
      </Swiper>

</Container>
    </div>
  );
};

export default sliderDiseño;
