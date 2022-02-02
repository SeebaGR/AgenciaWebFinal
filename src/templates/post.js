import React from "react";
import BlogLayoutPost from "../BlogLayout/BlogLayoutPost";
import "../templates/post/post.scss";
import { Link } from "gatsby";

import UsePost from "../hooks/usePost";
import { Col, Row, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Header from "../componentes/header";
import Seo from "../componentes/seo"
import ShareButtons from "../componentes/sharebutton";
import Footer from "../componentes/footer";
import SectionInstagram from "../componentes/SectionInstagram"
import "../componentes/global-styles/estilo.scss"
import moment from "moment";
import "moment/locale/es"




export default function Post(props) {
  const colorFondo = "#031fff";
  const {
    pageContext: { data: post },
  } = props;

  const response = UsePost();
  const dato = response.allStrapiPost.edges;
  const title = post.seo_title;
  const url = props.location.href;
  const idpost = post.id;
  const description = post.seo_descripcion;


console.log(post.create_hora)

 

  return (
    <div>
   
    
     

      <div
        className="image moviil-image"
        style={{
          
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `  url(${post.image_banner.url})`,
          transition: "background 0.3s  borderRadius 0.3s",
          height: "500px",
          width: "100%",
          
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            transition: "background .3s,border-radius .3s,opacity .3s",
            width: "100%",
            height: "100%",
           
           
          }}
        >
          <div>
          <h1 style={{width:"63%", margin:"0 auto",lineHeight: "53px"}} className="titulo-post2">{post.titulo_post}</h1>
          <div style={{marginTop:"15px", display: "flex", justifyContent:"center"}}>
          <p style={{fontSize:"18px", textAlign:"center", color:"white"}}>
          <i style={{marginRight:"3px"}} class="bi bi-calendar"></i>
          {post.create_dia}
            </p>
            <p style={{fontSize:"18px",marginLeft:"5px", textAlign:"center", color:"white"}}>
            <i style={{marginRight:"3px"}} class="bi bi-alarm"></i>
          {post.create_hora}
            </p>
            </div>
          </div>
        </div>
      </div>
      <Header colorFondo={colorFondo} />
      <div  style={{ display: "flex", justifyContent: "center" }}>
        <BlogLayoutPost>
            <Seo
              title={post.seo_title}
              description={post.seo_descripcion}
              image={post.miniatura.url}
            ></Seo>

        <div className="blog-post-layoutt" >
          <div id="bitacora-id" className="bitacoraRest"
           
            dangerouslySetInnerHTML={{ __html: post.contenido_1 }}
          />

<h1 className="til-fn"  >COMPARTE ESTA NOTICIA EN RRSS</h1>
      
      
      <div className="divBotonShare" >
          <div>
          
          <ShareButtons title={title} url={url} description={description} />
          </div>
          </div>

          <h1 className="titulo-bitacora">MIRA LO MAS NUEVO DE LA BITÁCORA</h1>

<Container>
  <Row xs={1} md={2}>
  {dato.filter( item => item.node.id !== idpost ).slice(0, 2).map(item => (


        <Col style={{ display: "flex", marginBottom:"10px" }}>
        
        <Card>
          <Card.Img className="bitacora-single img-fluid " variant="top" src={item.node.miniatura.url} />
          <Card.Body id="ccccc" className="card-body-post" >
            <Link to={`/${item.node.url}`}>
            <Card.Title className="titulo-post">
             
             {item.node.seo_title}
            </Card.Title>
            </Link>
            <Card.Text className="card-text2">
              {item.node.seo_descripcion}
            </Card.Text>
            <Link to={`/${item.node.url}`}>
            <div className="hoverclas2">
            <Card.Link style={{fontSize:"18px"}}>
              Leer más &gt;
            </Card.Link>
            </div>
            </Link>
          </Card.Body>
        </Card>
      
    </Col>
  

     
    ))}
  </Row>
</Container>


          </div>


             
       
        </BlogLayoutPost>
  
        
      </div>
    
      <SectionInstagram ></SectionInstagram>
        <Footer></Footer>
     
      
    </div>
  

           



  );
}



