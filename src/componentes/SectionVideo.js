
import React from "react";

import {  Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../componentes/global-styles/estilo.scss"

import vidio from "../images/pantt.webp";







export const SectionVideo = (props) => {
  const [show, setShow] = React.useState(true);


  return (
    <div className="padd-padd" style={{  paddingTop: "40px", paddingBottom: "40px", background: props.colorFondo }}>
      <div
        className="modal-video"
        style={{
          width:"712px",
          display:"none",
          alignItems:"center",
          justifyContent:"center",
          margin:"0 auto",
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
             className="modal-video videocapitan"
             

          

           >
<img loading="lazy"  className="ol-mg img-fluid" alt="olas" width="100%"  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Thumbnail-01_1.png?v=1690929850"></img>
           
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
      <iframe className="lazyframe videoiframe2" width="778" height="400" src="https://www.youtube.com/embed/kMPNdhu54xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe className="lazyframe videoiframe1" width="380" height="270" src="https://www.youtube.com/embed/kMPNdhu54xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
        
      )}
   
         


      
       
   
    </div>
  );
};

export default SectionVideo;


