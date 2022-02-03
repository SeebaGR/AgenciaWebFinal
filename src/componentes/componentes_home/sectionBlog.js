
import React from "react";
import '../global-styles/estilo.scss'
import { Col, Row, Container } from "react-bootstrap";
import UsePosts from "../../hooks/usePosts";
function sectionBlog() {
  const response = UsePosts();
  const data = response.allStrapiPost.nodes;



  return (
    <div className="sec-blg-3" style={{padding:"30px"}}>
      <div style={{ lineHeight:"1em", textAlign: "center" }}>
        <h1 className="tituloBitacora" style={{ lineHeight:"1em", fontSize:"50px", fontWeight:"700" }} >Ingresa a la Bitácora</h1>
        <br></br>
        <p style={{ lineHeight:"1em", fontSize:"20px", marginBottom:"30px"}} >Nuestro Blog de Contenidos Digitales</p>
      </div>
      <Container style={{  maxWidth: "1140px" }}>
        <Row className="bitacora-pc">
          {data.slice(0, 3).map((item, i) => (
            <Col sm={4} key={i}>
              <div style={{ padding: "10px" }}>
                <div style={{ border: "1px solid rgba(0,0,0,.125)" }}>
                  <img
                  loading="lazy"
                    width={358}
                    height={201}
                    className="lazyload img card-img-top"
                    src={item.miniatura.url}
                    alt="Card  cap"
                  ></img>
                
                  <div className="card-bit" >
                  
                    <h5 className="card-title" style={{ color: "#2046F5" }}>
                    <a  href={item.url}>
                      {item.seo_title}
                      </a>
                    </h5>
                    
                    <p className="card-text" >
                      {item.seo_descripcion}
                    </p>
                    <div className="hoverclas3">
            <a
              className="texto-link4"
              href="https://ecommerce.agencialosnavegantes.cl/"
              
            >
              Leer más &gt;
             
            </a>
            </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="bitacora-movil">
          {data.slice(0, 2).map((item, i) => (
            <Col sm={4} key={i}>
              <div style={{  padding: "10px" }}>
                <div style={{ border: "1px solid rgba(0,0,0,.125)" }}>
                  <img
                  loading="lazy"
                    width={358}
                    height={201}
                    className="lazyload img card-img-top"
                    src={item.miniatura.url}
                    alt="Card  cap"
                  ></img>
                  <div className="card-body" style={{textAlign:"justify"}}>
                    <h5 className="card-title" style={{ color: "#2046F5" }}>
                      {item.seo_title}
                    </h5>
                    <p className="card-text" >
                      {item.seo_descripcion}
                    </p>
                    <a href="/blog" className="estiloLink3" style={{ color:"#ff5a83",}}>
                    Leer más &gt;
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="btmmm" style={{display:"flex", justifyContent:"center"}} >
      <div style={{marginTop:"20px"}} className="hoverclas2">
            <a
              className="texto-link2"
              href="https://ecommerce.agencialosnavegantes.cl/"
              
            >
              Ver mas contenido<i
                    className="bi bi-arrow-right"
                    style={{ marginTop:"3px", paddingLeft: "3px", position:"absolute" }}
                  ></i> 
             
            </a>
            </div>
      </div>
    </div>
  );
}

export default sectionBlog;
