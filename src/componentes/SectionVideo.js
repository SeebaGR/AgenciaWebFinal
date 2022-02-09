
import React from "react";

import {  Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../componentes/global-styles/estilo.scss"
import svvg from "../images/play-circle.svg";
import vidio from "../images/img-video-ez.webp";







export const SectionVideo = (props) => {
  const [show, setShow] = React.useState(true);


  return (
    <div className="padd-padd" style={{ paddingTop: "40px", paddingBottom: "40px", background: props.colorFondo }}>
      <div
        className="modal-video"
        style={{
          
          display:"none",
          alignItems:"center",
          justifyContent:"center",
          marginLeft: "10px", marginRight: "10px",
          textAlign: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat ",
          backgroundPosition: "center",
          height: "400px",
          backgroundImage: {vidio},
        }}
      >
        <Button
          variant="primary"
          style={{
            
            
            background: "transparent",
            border: "none",
          }}
          onClick={() => {
            setShow(!show);
          }}
        >
          <i
            className="bi bi-play-circle botonvideo"
           
          ></i>
        </Button>
      </div>
    

      
      {show ? (
             <div
             className="modal-video"
             style={{
               position:"relative",
               display:"flex",
               alignItems:"center",
               justifyContent:"center",
               marginLeft: "10px", marginRight: "10px",
               textAlign: "center",
               backgroundSize: "contain",
               backgroundRepeat: "no-repeat ",
               backgroundPosition: "center",
               height: "400px",
               
             }}

          

           >
<img loading="lazy"  className="ol-mg img-fluid" alt="olas" width={750} height={422}  src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643899711/img_video_ez_eecab3f9c4.webp"></img>
           
             <Button
               variant="primary"
               style={{
               
                 position:"absolute",
                 background: "transparent",
                 border: "none",
               }}
               onClick={() => {
                 setShow(!show);
               }}
             >
               <i class="bi bi-play-circle"></i>
               <i
                 className="bi bi-play-circle botonvideo"
                 style={{ color: "#FFFD03", fontSize: "100px" }}
               ></i>
             </Button>
           </div>
      ) : (
        <div style={{display:"flex", justifyContent:"center"}}>
      <iframe className="videoiframe2" width="778" height="400" src="https://www.youtube.com/embed/dj34vdkvyjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe className="videoiframe1" width="380" height="270" src="https://www.youtube.com/embed/dj34vdkvyjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
        
      )}
   
         


      
       
   
      <div className="sect-vidd2" >
        <h2 className="titulo-video"  >¿Quieres saber más sobre nuestra Agencia?</h2>

       

      </div>
      <div style={{textAlign:"center", marginTop:"20px"}} className="hoverclas2">
            <a
              className="texto-link2"
              href="https://ecommerce.agencialosnavegantes.cl/"
              
            >
              Ver nuestro Instagram	&gt; 
             
            </a>
            </div>
    </div>
  );
};

export default SectionVideo;


