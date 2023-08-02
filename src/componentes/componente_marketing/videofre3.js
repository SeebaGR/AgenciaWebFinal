
import React from "react";
import {  Button } from "react-bootstrap";
import "../global-styles/estilo.scss"
import vidio from "../../images/pantt.webp";







export const SectionVideo5 = (props) => {
  const [show, setShow] = React.useState(true);


  return (
    <div id="video2d" className="padd-padd" style={{ paddingTop: "40px", paddingBottom: "40px", background: props.colorFondo }}>
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
          width: "682px",
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
               width: "682px",
               
             }}

          

           >
<img loading="lazy"  className="ol-mg img-fluid" alt="olas" width="100%" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/PORTADA_ADS_TRANSFORMADORES_Mesa_de_trabajo_1.jpg?v=1691015341"></img>
           
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

      <iframe  className="lazyframe videoiframe2"  src="https://www.youtube.com/watch?v=POaqVqWeg34" width="678" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<iframe className="lazyframe videoiframe1"  src="https://www.youtube.com/watch?v=POaqVqWeg34" width="450" height="300" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>


      </div>
        
      )}
   
         


      
       
   
    </div>
  );
};

export default SectionVideo5;


