
import React from "react";
import { Link } from "gatsby";
import { Modal, Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../componentes/global-styles/estilo.scss"









export const SectionVideo = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="padd-padd" style={{ paddingTop: "40px", paddingBottom: "40px", background: props.colorFondo }}>
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
          backgroundImage: `url(https://agencia-navegantes.s3.amazonaws.com/imgvideo2_1_f7cace4ae8.jpg)`,
        }}
      >
        <Button
          variant="primary"
          style={{
            
            
            background: "transparent",
            border: "none",
          }}
          onClick={handleShow}
        >
          <i
            className="bi bi-play-circle"
            style={{ color: "#FFFD03", fontSize: "100px" }}
          ></i>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
         

          <div style={{ display:"flex", justifyContent:"center" }}>
      <iframe className="video11" style={{position:"absolute", marginTop:"150px"}} width="70%" height="600" src="https://www.youtube.com/embed/dj34vdkvyjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe className="video22" style={{position:"absolute", marginTop:"150px"}} width="100%" height="200" src="https://www.youtube.com/embed/dj34vdkvyjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      </div> 
      <div>
      <Button
        className="btn-video-final"
            style={{
              background: "transparent",
              border: "none",
              fontSize: "50px",
              display:"flex",
              float:"right",
              width:"14%",
              marginTop:"5%"
            }}
            onClick={handleClose}
          >
            <i className="bi bi-x"></i>
          </Button>
          </div>
        </Modal.Body>
      </Modal>
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


