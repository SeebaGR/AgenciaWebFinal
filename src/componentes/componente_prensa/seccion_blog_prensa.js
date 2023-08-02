import React from "react";
import "../global-styles/layout";
import { Col, Row, Container } from "react-bootstrap";
import UsePrensa from "../../hooks/usePrensa";
import Card from "react-bootstrap/Card";
const sectionBlogprensa = () => {
    const response = UsePrensa();
    const data = response.allStrapiPrensa.nodes[0].blog_prensa;

  
   
    return (
      <div style={{marginTop:"40px"}}>
        <Container>
  <Row   xs={1} md={3}>
        {data.slice(1).map((item, i) => (
               <Col  style={{ display: "flex",marginBottom:"40px" }}>
        
               <Card>

                 <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src={item.link_imagen_post} />

                 <Card.Body id="ccccc" className="card-body-post" >
                  <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>{item.etiqueta_blog_prensa}</span>
                   <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
                    
                    {item.titulos_blog_prensa}
                   </Card.Title>
               
                   <Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text2">
                     {item.descripcion_blog_prensa}
                   </Card.Text>
        
             
                 </Card.Body>
               </Card>
             
           </Col>
            ))}
    </Row>
</Container>



      </div>
    );
  };
  
  export default sectionBlogprensa;