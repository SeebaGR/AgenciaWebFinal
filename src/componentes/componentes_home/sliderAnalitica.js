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
const slideranalitica = () => {
  const response = UseHome();
  const datos = response.allStrapiHome.nodes[0].home_seccion3[0];
  const imagen_iconos = datos.imagen_iconos;


  
  return (
    <div  >
 <Container>
 
 <Swiper id="swiperAnalitica" navigation={true} modules={[Navigation,Pagination]}   slidesPerView={1}
       
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
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651162412/Landing_Agencia_Casos_Analitica_copy_2_158364d993.png"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651162413/Landing_Agencia_Casos_Analitica_copy_16c300d316.png"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651162413/Landing_Agencia_Casos_Analitica_27_1fb9de314a.png"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651162413/Landing_Agencia_Casos_Analitica_28_ff6a1f445b.png"
                   
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651162412/Landing_Agencia_Casos_Analitica_29_a8fd07a91b.png"
               
                  
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651162414/Landing_Agencia_Casos_Analitica_31_5446ac4c18.png"
                  
                 
                  ></img>
 </SwiperSlide>
 
        
      </Swiper>

</Container>
    </div>
  );
};

export default slideranalitica;
