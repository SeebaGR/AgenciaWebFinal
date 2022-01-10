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
  const response = UseInstagram();
  const data = response.allStrapiInstagramContenidos.nodes;


  return (
    <div>
      <div style={{ textAlign: "center", paddingTop: "25px" }}>
        <h2 className="tituloInsta" style={{fontSize:"53px", fontWeight:"700"}}>Síguenos en Instagram</h2>
        <p className="sct-Insta-parrf" style={{fontSize:"20px", marginBottom:"30px"}}>Donde encontraras datos y tips del mundo digital</p>
      </div>

      <Swiper
        slidesPerView={6}
        
        navigation={true}
        className="mySwiperInstagram"
        breakpoints={{
          "360": {
            "slidesPerView": 1,
            "spaceBetween": 20
          },
          "400": {
            "slidesPerView": 1,
            "spaceBetween": 20
          },
          "640": {
            "slidesPerView": 2,
            "spaceBetween": 20
          },
          "768": {
            "slidesPerView": 4,
            "spaceBetween": 40
          },
          "1024": {
            "slidesPerView": 6,
          }
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <a href={item.asadasd} key={i}>
              <img  alt="ss" key={i} className="img-fluid" src={item.imagen.url}></img>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div style={{ textAlign: "center", paddingTop: "25px", fontWeight:"700", fontSize:"25px" }}>
        <a href="https://www.instagram.com/agencialosnavegantes/">
          Visita nuestro Instagram
          <i
                className="bi bi-arrow-right"
                style={{ color: "#c36",
                fontSize: "25px",
                fontWeight: "700", marginTop: "5px", paddingLeft: "10px" }}
              ></i>
        </a>
      </div>
    </div>
  );
}

export default SectionInstagram;
