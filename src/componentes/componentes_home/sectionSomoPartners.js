import { Link } from "gatsby";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
function sectionSomoPartners() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion8[0]
  return (
    <div className="cont-mov" style={{ padding:"40px", background: "#031FFF"}}>
      <Container className="sc-refresh" >
        <Row >
          <Col  sm={6}>
            <h1   style={{ lineHeight:"1em", fontSize:"60px",fontWeight:"700",color:"#fff"}} className="somospTitulo  encabezado">{data.titulo}</h1>
          
            <p className="descPartners1" style={{ fontSize:"20px", textAlign: "justify" ,color:"#fff",}}>{data.descripcion1}</p>
            <p className="descPartners1" style={{ fontSize:"20px", textAlign: "justify" ,color:"#fff",}}>{data.descripcion2}</p>

          </Col>
          <Col style={{display:"flex", alignItems:"center", justifyContent:"center"}} >
           <div style={{textAlign:"center"}}>
            <img
              style={{ width: "70%", textAlign: "center" }}
              className="lazyload img img-fluid imgPart"
              src={data.imagen[0].url}
              alt=""
            ></img>
            <div style={{textAlign:"center"}} >
            <Link  to="https://www.google.com/partners/agency?id=4329839845" className="hoverclas2" style={{color:"#fff",fontSize:"18px"}}>Ver Insignia <i
                    className="bi bi-arrow-right"
                    style={{ marginTop:"3px", paddingLeft: "3px", position:"absolute" }}
                  ></i> </Link>
            </div>
            </div>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default sectionSomoPartners;
