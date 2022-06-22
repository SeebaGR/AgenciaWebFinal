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
           <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
              
                    className="lazyload mmimm  img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655916074/w2_min_a7c15d0843_14313ae8f8.png"
                  
                 
                  ></img>
 </SwiperSlide>
        <SwiperSlide>  
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img
                  
                  loading="lazy"
                  alt=""
             
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655915928/Correcciones_Landing_Shopify_04_1_6c1ddc01fb_cd0fc73f12.png"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide>  
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img
                  
                  loading="lazy"
                  alt=""
             
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655916420/over7_min_5e87216bad_7457f398b3.png"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  loading="lazy"
                  alt=""
             
                    className="lazyload mmimm  img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655916474/Landing_Agencia_Mockup_Ecommerce_41_62d6fadcea.png"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
             
                    className="lazyload  mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655916531/Landing_Agencia_Mockup_Ecommerce_copy_2_0439465f57.png"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
              
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655916561/w4_min_c8f4307e30_b14db65a56.png"
                   
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                 
                    className="lazyload mmimm  img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655916584/benow8_min_6a64cdb704_40917694ba.png"
               
                  
                  ></img>
 </SwiperSlide>

 
        
      </Swiper>

</Container>
    </div>
  );
};

export default sliderDiseño;
