import React from "react";
import UseInstagram from "../hooks/useInstagram";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../componentes/global-styles/estilo.scss"
import "../componentes/global-styles/layout"
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);
function SectionInstagram() {



  return (
    <div className="sct-insta1" style={{paddingTop:"40px",paddingBottom:"20px"}}>
      <div className="wbww" style={{ textAlign: "center" }}>
        <h2 className="tituloInsta" style={{fontSize:"53px", fontWeight:"700"}}>Síguenos en Instagram</h2>
        <p className="sct-Insta-parrf" style={{marginTop:"10px", fontSize:"20px", marginBottom:"30px"}}>Donde encontraras datos y tips del mundo digital</p>
      </div>
      <div> 
      <Swiper id="swiper-instagram"
  
        
        navigation={true}
        className="mySwiperInstagram"
        breakpoints={{
          "360": {
            "slidesPerView": 1,
            "spaceBetween": 0
          },
          "400": {
            "slidesPerView": 1,
            "spaceBetween": 0
          },
          "640": {
            "slidesPerView": 2,
            "spaceBetween": 0
          },
          "768": {
            "slidesPerView": 4,
            "spaceBetween":0
          },
          "1024": {
            "slidesPerView": 6,
          }
        }}
      >
    
         <SwiperSlide >
            <a href="https://www.instagram.com/p/CZfeHhsKCdR/" >
              <img loading="lazy"  width={250} height={250}  alt="ss"  className="img-fluid" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655156369/Landing_Agencia_seleccion_IG_68_267824b71c_7e9bb1edf0.jpg"></img>
            </a>
          </SwiperSlide>
          <SwiperSlide >
          <a href="https://www.instagram.com/p/CVWGEYgpg-s/" >
              <img loading="lazy"  width={250} height={250}  alt="ss"  className="img-fluid" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656436191/sadadssad_a233d129d5.jpg"></img>
            </a>
          </SwiperSlide>
          <SwiperSlide >
            <a href="https://www.instagram.com/p/CWboLh5s68_/" >
              <img loading="lazy"  width={250} height={250}  alt="ss" className="img-fluid" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655156369/Landing_Agencia_seleccion_IG_70_6e0916bfc6_b21a507290.jpg"></img>
            </a>
          </SwiperSlide>
            <SwiperSlide >
            <a href="https://www.instagram.com/p/CVRHUt_AUHw/" >
              <img loading="lazy"  width={250} height={250}  alt="ss"  className="img-fluid" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656436061/agencialosnavegantes_246490831_310594827106747_8639596645915563053_n_fc7c464154.jpg"></img>
            </a>
          </SwiperSlide>
          <SwiperSlide >
            <a href="https://www.instagram.com/p/CbvnKy5NcaF/" >
              <img loading="lazy"  width={250} height={250}  alt="ss"  className="img-fluid" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655156369/Landing_Agencia_seleccion_IG_67_74c183fcdb_02556ca481.jpg"></img>
            </a>
          </SwiperSlide>
         
      </Swiper>
      </div>
      <div style={{textAlign:"center", marginTop:"20px"}} className="hoverclas2">
            <a
              className="texto-link2"
              href="https://www.instagram.com/agencialosnavegantes/?hl=es"
              
            >
              Ver nuestro Instagram	&gt; 
             
            </a>
            </div>
    </div>
  );
}

export default SectionInstagram;
