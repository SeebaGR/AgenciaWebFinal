
import React from "react";

import {  Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../componentes/global-styles/estilo.scss"

import vidio from "../images/pantt.webp";







export const SectionVideo = (props) => {
  const [show, setShow] = React.useState(true);


  return (
    <div className="padd-padd" style={{ display:"flex", justifyContent:"center", paddingTop: "40px", paddingBottom: "40px", background: props.colorFondo }}>
      <div
        className="modal-video"
        style={{
          width:"712px",
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
     
        </Button>
      </div>
    

      
      {show ? (
             <div
             className="modal-video"
             style={{
               position:"inherit",
               display:"flex",
               alignItems:"center",
               justifyContent:"center",
               marginLeft: "10px", marginRight: "10px",
               textAlign: "center",
               backgroundSize: "contain",
               backgroundRepeat: "no-repeat ",
               backgroundPosition: "center",
               height: "400px",
               width:"712px"
               
             }}

          

           >
<img loading="lazy"  className="ol-mg img-fluid" alt="olas" width="100%"  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651245581/Landing_Agencia_Video_Agencia_278a9826ef.jpg"></img>
           
             <Button
               variant="primary"
               style={{
                 height:"109px",
                 width:"109px",
                 position:"absolute",
                 background: "transparent",
                 border: "none",
               }}
               onClick={() => {
                 setShow(!show);
               }}
             >
           
             </Button>
           </div>
      ) : (
        <div style={{display:"flex", justifyContent:"center"}}>
      <iframe className="lazyframe videoiframe2" width="778" height="400" src="https://www.youtube.com/embed/dj34vdkvyjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe className="lazyframe videoiframe1" width="380" height="270" src="https://www.youtube.com/embed/dj34vdkvyjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
        
      )}
   
         


      
       
   
    </div>
  );
};

export default SectionVideo;


