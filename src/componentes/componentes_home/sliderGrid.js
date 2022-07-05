import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import UseHome from "../../hooks/useHome";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Link } from "gatsby";
import "../global-styles/estilo.scss"

// import required modules
import { Grid, Pagination, Navigation } from "swiper";

export default function App() {
    const response = UseHome();
    const Datos = response.allStrapiHome.nodes[0].home_seccion6;



  return (
    <>
<div  className="movil-for" >
<div   >
<h1 className="subtituloSobrer" style={{ fontSize: "50px", fontWeight: "700", textAlign:"center" }}>Hemos apoyamos a cientos de marcas</h1> 
<p style={{ fontSize: "17px", textAlign:"center", fontWeight: "300" }}>Trabajamos con más de 60 empresas activamente.</p> 
<p style={{marginTop:"-20px", fontSize: "17px", textAlign:"center", fontWeight: "300" }}>Hemos asesorado a +500 empresas en aumentar sus ventas online. </p> 

      </div>


      <Swiper id="swipgri" 
      navigation={true}
      slidesPerView={2}
      modules={[Grid, Pagination, Navigation]}
        grid={{
          rows: 2,
        }}
        spaceBetween={0}
        
        
        className="mySwiperllll"
      >
            {Datos.map((item, i) => (
                <SwiperSlide key={i}>
                  <a href={item.link1} key={i}>
                    <img loading="lazy" 
                      key={i}
                      className="imsld-fin img-slider-movil img-fluid"
                      width={203}
                      height={203}
                      src={item.imagen1[0].url}
                      alt=""
                    ></img>
                  </a>
                  
                </SwiperSlide>
              ))}
      </Swiper>
      <div className=" slider-pad" style={{justifyContent:"center", display:"flex", textAlign: "center", paddingTop: "25px" }}>
          <h2 className="tit-movil" style={{ marrginTop:"20px", marginBottom:"20px", fontSize:"28px", fontWeight:"700", paddingLeft:"10px", paddingRight:"10px" }} >¿Quieres conocer nuestros casos de éxito?</h2>
 
        </div>
                 <div  className=" hoverclas2 movil-slider" style={{marginBottom:"30px", textAlign:"center", justifyContent:"center"}}>
          <Link to="/contacto"
           className="tit-slider-link"
          style={{
            
                color: "#031FFE",
                fontSize: "18px",
                fontWeight: "700",
                textDecoration: "none",
              }}>
            Solicita portafolio aquí
            &gt;
          </Link>
          </div></div>
    </>
  );
}
