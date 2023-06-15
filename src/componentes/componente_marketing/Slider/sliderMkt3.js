import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../global-styles/estilo.scss"


import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";


// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
const slidermkt3 = () => {



  
  return (
    <div  >
 <Container>
 
 <Swiper id="swiperMkt" navigation={true}  slidesPerView={1}
       
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        modules={[Pagination]}
        className="mySwiper swipp" >
        <SwiperSlide>  
        
            <img
                  style={{paddingBottom:"20px", paddingRight: "10px"}}
                  loading="lazy"
                  alt=""
                  width="85%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/LandingEcommerce_Partner-28.png?v=1677185799"
                   

                  ></img>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  style={{paddingBottom:"20px", paddingRight: "10px"}}
                  loading="lazy"
                  alt=""
                  width="85%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_Partner_29_04d4cab851.png?v=1658868998"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px", paddingRight: "10px"}}
                  loading="lazy"
                  alt=""
                  width="85%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_Partner_30_52bc8a8445.png?v=1658868998"
                    
                  ></img>
 </SwiperSlide>


 
        
      </Swiper>

</Container>
    </div>
  );
};

export default slidermkt3;
