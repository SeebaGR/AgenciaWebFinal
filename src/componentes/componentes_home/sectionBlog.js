import { Link } from "gatsby";
import React from "react";
import '../global-styles/estilo.scss'
import { Col, Row, Container } from "react-bootstrap";
import UsePosts from "../../hooks/usePosts";
function sectionBlog() {
  const response = UsePosts();
  const data = response.allStrapiPost.nodes;

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 className="tituloBitacora" style={{ marginTop:"20px", lineHeight:"1em", fontSize:"50px", fontWeight:"700" }} >Ingresa a la Bitácora</h1>
        <br></br>
        <p style={{ lineHeight:"1em", fontSize:"20px", marginBottom:"30px"}} >Nuestro Blog de Contenidos Digitales</p>
      </div>
      <Container style={{  maxWidth: "1140px" }}>
        <Row className="bitacora-pc">
          {data.slice(0, 3).map((item, i) => (
            <Col sm={4} key={i}>
              <div style={{  padding: "10px" }}>
                <div style={{ border: "1px solid rgba(0,0,0,.125)" }}>
                  <img
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
                    <a href="/blog" className="estiloLink3" style={{color:"#ff5a83",}}>
                      Leer más
                    </a>
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
                    <a href="/blog" className="estiloLink3" style={{color:"#ff5a83",}}>
                      Leer más
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div style={{display:"flex", marginBottom:"40px", justifyContent:"center"}} >
      <div className="hoverclas2" style={{display:"flex", position:"absolute", justifyContent:"center", textAlign: "center" }}>
        <Link to="/blog" >
          
        <span style={{fontSize:"25px", fontWeight:"700"}}  >Ver más Contenidos<i
                className="bi bi-arrow-right"
                style={{ color: "#ff5a83",
                fontSize: "25px",
                fontWeight: "700", marginTop: "5px", paddingLeft: "10px" }}
              ></i>
        </span>
        
        
        </Link>
      </div>
      </div>
    </div>
  );
}

export default sectionBlog;
