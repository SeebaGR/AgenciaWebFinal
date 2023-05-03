import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../global-styles/estilo.scss"


import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";


// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
const sliderReviews = () => {


  
  return (
    <div className="paddslidereviews"   >
<div className="revDiv"  >


<h1    className="somospTitulo  encabezado">Testimonios que nos enorgullecen ❤️</h1>
 
 <Swiper id="swiperReviews"   navigation={true}    
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
        <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Testimonios_landing_Agencia_Mashini_1_b6ea77acc1.png?v=1658869065"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Testimonios_landing_Agencia_Cafe_Caribe_1_72066baad3.png?v=1658869065"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Testimonios_landing_Agencia_Cada_Cosa_1_a93eb2c8b6.png?v=1658869065"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Testimonios_landing_Agencia_Tendencias_Gourmet_1_fe6ba73dea.png?v=1658869065"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Testimonios_landing_Agencia_Amoble_1_99d0ae096c.png?v=1658869065"
                    
                  ></img>
 </SwiperSlide>

        <SwiperSlide>  
        <div >
            <img
                  
                  loading="lazy"
                  alt=""
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Reviews_51_d799097710.png?v=1658869065"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  loading="lazy"
                  alt=""
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Reviews_52_214eb0b78c.png?v=1658869065"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Reviews_53_f324930b99.png?v=1658869065"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Reviews_54_e319308a6a.png?v=1658869065"
                   
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Reviews_55_012bac74b6.png?v=1658869065"
               
                  
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Reviews_56_1178712a06.png?v=1658869065"
                  
                 
                  ></img>
 </SwiperSlide>
        
      </Swiper>

      </div>
    </div>
  );
};

export default sliderReviews;
