import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../global-styles/layout"


import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";


// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
const sliderReviews = () => {


  
  return (
    <div className="paddslidereviews"   >
<div className="revDiv"  >


<h1    className="somospTitulo  encabezado">Testimonios que nos enorgullecen ❤️</h1>
 
 <Swiper  id="swiperReviews"   navigation={true}    
              spaceBetween={40} autoplay={{
                delay: 4000
            }}
            modules={[Pagination]}
   
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
      
        className="poupau mySwiper" >
        <SwiperSlide>  <img

                  alt=""
                    className=" mmimm lazyload img-fluid "
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-10.png?v=1710265746"

                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
      
                  alt=""
                    className="mmimm lazyload img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-13.png?v=1710265747"

                  ></img>
                  
 </SwiperSlide>
 <SwiperSlide>  <img
                  
               
                  alt=""
                    className="mmimm lazyload img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-01.png?v=1710265746"

                  ></img>
                  
 </SwiperSlide>
 <SwiperSlide>  <img
                  
             
                  alt=""
                    className="mmimm lazyload img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-06.png?v=1710265746"

                  ></img>
                     
 </SwiperSlide>
 <SwiperSlide>  <img
                  
              
                  alt=""
                    className="mmimm lazyload img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-14.png?v=1710265746"

                  ></img>
                    
 </SwiperSlide>

        <SwiperSlide>  
        <div >
            <img
                  alt=""
                    className="mmimm lazyload img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-03.png?v=1710265747"

                  ></img>
                               
                  </div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
              
                  alt=""
                    className=" mmimm lazyload img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-02.png?v=1710265746"

                  ></img>
                        
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                
                  alt=""
                    className="mmimm lazyload img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-16.png?v=1710265746"

                  ></img>
                  
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                 
                  alt=""
                    className="mmimm lazyload img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-05.png?v=1710265746"
                 
                  ></img>
                 
 </SwiperSlide>
 <SwiperSlide>  <img
                  
             
                  alt=""
                    className="mmimm  lazyload img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-07.png?v=1710265746"
                  
                  ></img>
                  
 </SwiperSlide>
 <SwiperSlide>  
  <img                  
                
                  alt=""
                  className="mmimm lazyload img-fluid"
                  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-11.png?v=1710265746"                               
                  ></img>
                    

 </SwiperSlide>
 <SwiperSlide>  
  <img                  
                
                  alt=""
                  className="mmimm lazyload img-fluid"
                  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-08.png?v=1710265747"                               
                  ></img>
                    

 </SwiperSlide>
 <SwiperSlide>  
  <img                  
                
                  alt=""
                  className="mmimm lazyload img-fluid"
                  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-09.png?v=1710265746"                               
                  ></img>
                    

 </SwiperSlide>
 <SwiperSlide>  
  <img                  
                
                  alt=""
                  className="mmimm lazyload img-fluid"
                  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-15.png?v=1710265746"                               
                  ></img>
                    

 </SwiperSlide>
 <SwiperSlide>  
  <img                  
                
                  alt=""
                  className="mmimm lazyload img-fluid"
                  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-12.png?v=1710265746"                               
                  ></img>
                    

 </SwiperSlide>
 <SwiperSlide>  
  <img                  
                
                  alt=""
                  className="mmimm lazyload img-fluid"
                  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-04.png?v=1710265746"                               
                  ></img>
                    

 </SwiperSlide>
 <SwiperSlide>  
  <img                  
                
                  alt=""
                  className="mmimm lazyload img-fluid"
                  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-17.png?v=1710265746"                               
                  ></img>
                    

 </SwiperSlide>
        
      </Swiper>

      </div>
    </div>
  );
};

export default sliderReviews;
