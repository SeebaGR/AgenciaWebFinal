
import React from "react";
import { Link } from "gatsby";
import { Modal, Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../componentes/global-styles/estilo.scss"









export const SectionVideo = (props) => {
  const [show, setShow] = React.useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          backgroundImage: `url(https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643136739/imgvideo2_upzzfx.jpg)`,
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
            className="bi bi-play-circle"
            style={{ color: "#FFFD03", fontSize: "100px" }}
          ></i>
        </Button>
      </div>
    

      
      {show ? (
             <div
             className="modal-video"
             style={{
               
               display:"flex",
               alignItems:"center",
               justifyContent:"center",
               marginLeft: "10px", marginRight: "10px",
               textAlign: "center",
               backgroundSize: "contain",
               backgroundRepeat: "no-repeat ",
               backgroundPosition: "center",
               height: "400px",
               backgroundImage: `url(https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643136739/imgvideo2_upzzfx.jpg)`,
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
                 className="bi bi-play-circle"
                 style={{ color: "#FFFD03", fontSize: "100px" }}
               ></i>
             </Button>
           </div>
      ) : (
        <div style={{display:"flex", justifyContent:"center"}}>
      <iframe width="778" height="400" src="https://www.youtube.com/embed/dj34vdkvyjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
              Ver nuestro Instagram<i
                    className="bi bi-arrow-right"
                    style={{ marginTop:"2px", paddingLeft: "3px", position:"absolute" }}
                  ></i> 
             
            </a>
            </div>
    </div>
  );
};

export default SectionVideo;


