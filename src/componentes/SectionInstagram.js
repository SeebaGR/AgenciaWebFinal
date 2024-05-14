import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../componentes/global-styles/layout";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";


// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);

function SectionInstagram() {



  return (
    <div className="sct-insta1" style={{paddingTop:"40px",paddingBottom:"20px"}}>
      <div className="wbww" style={{ textAlign: "center" }}>
        <h2 className="tituloInsta" style={{fontSize:"53px", fontWeight:"700"}}>Síguenosasdad en Instagram</h2>
        <p className="sct-Insta-parrf" style={{marginTop:"10px", fontSize:"20px", marginBottom:"30px"}}>Donde encontraras datos y tips del mundo digital</p>
      </div>
     <div className="feropi2">
     <Swiper

        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <a href="https://www.instagram.com/p/C4YNN_LR8IS/?hl=en" target="_blank"><img  style={{paddingBottom:"20px"}} loading="lazy" alt=""  width="100%"              
                    src="https://cdn.shopify.com/s/files/1/0801/9660/0105/files/AGENCIA_LOS_NAVEGANTES_1.jpg?v=1715699487"></img></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.instagram.com/p/C4G6KekxG6u/?hl=en" target="_blank"><img  style={{paddingBottom:"20px"}} loading="lazy" alt=""  width="100%"              
                    src="https://cdn.shopify.com/s/files/1/0801/9660/0105/files/AGENCIA_LOS_NAVEGANTES_2.jpg?v=1715699487"></img></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.instagram.com/p/C3sfAm7rLHR/?hl=en" target="_blank"><img  style={{paddingBottom:"20px"}} loading="lazy" alt=""  width="100%"              
                    src="https://cdn.shopify.com/s/files/1/0801/9660/0105/files/428629451_1133282294755762_4873282257311813760_n_1.jpg?v=1715699487"></img></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.instagram.com/reel/C1IfZxYuvI2/?hl=en" target="_blank"><img  style={{paddingBottom:"20px"}} loading="lazy" alt=""  width="100%"              
                    src="https://cdn.shopify.com/s/files/1/0801/9660/0105/files/AGENCIA_LOS_NAVEGANTES_4.jpg?v=1715699487"></img></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.instagram.com/reel/C6pVR-Sx1sH/?hl=en" target="_blank"><img  style={{paddingBottom:"20px"}} loading="lazy" alt=""  width="100%"              
                    src="https://cdn.shopify.com/s/files/1/0801/9660/0105/files/AGENCIA_LOS_NAVEGANTES_3.jpg?v=1715699487"></img></a>
        </SwiperSlide>
      </Swiper></div>
      <div style={{textAlign:"center", background:"white", paddingTop:"40px", paddingBottom:"40px", position:"relative", zIndex:"99999"}} >
            <a
              className="texto-link101"
              href="https://www.instagram.com/agencialosnavegantes/?hl=es"
              
            >
              Ver nuestro Instagram	&gt; 
             
            </a>
            </div>
    </div>
  );
}

export default SectionInstagram;
