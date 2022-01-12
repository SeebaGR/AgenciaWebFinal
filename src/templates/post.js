import React from "react";
import BlogLayoutPost from "../BlogLayout/BlogLayoutPost";
import "../templates/post/post.scss";
import { Link } from "gatsby";
import ButtonSocial from "../SocialMedia/buttonSocialMedia";
import UsePost from "../hooks/usePost";
import { Col, Row, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Header from "../componentes/header";
import Seo from "../componentes/seo"
import ShareButtons from "../componentes/sharebutton";
import Footer from "../componentes/footer";
import "../componentes/global-styles/estilo.scss"


export default function Post(props) {
  const colorFondo = "#031fff";
  const {
    pageContext: { data: post },
  } = props;

  const response = UsePost();
  const dato = response.allStrapiPost.edges;
  const title = `Read ${props.seo_title} `;
  const url = props.location.href;




 console.log(post.seo_title);


 

  return (
    <div>
   
    
     

      <div
        className="image"
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
          <h1 className="titulo-post2">{post.titulo_post}</h1>
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

        <div style={{boxShadow: "0px 0px 4px 0px rgba(0,0,0,.5)", padding: "20px", width:"50%",  margin:"0 auto",marginTop:"-3%", background:"white"}} >
          <div id="bitacora-id" className="bitacoraRest"
           
            dangerouslySetInnerHTML={{ __html: post.contenido_1 }}
          />


      <div className="divBotonShare" >
          <div>
          <ShareButtons title={title} url={url}  />
          </div>
          </div>

          <h1 className="titulo-bitacora">MIRA LO MAS NEVO DE LA BITÁCORA</h1>

<Container>
  <Row xs={1} md={2}>
    {dato.slice(0, 2).map((item, i) => (
      <Col style={{ display: "flex" }}>
        <Link to={`/${item.node.url}`}>
          <Card>
            <Card.Img className="bitacora-single img-fluid" variant="top" src={item.node.miniatura.url} />
            <Card.Body>
              <Card.Title className="titulo-post">
               
               {item.node.titulo_post}
              </Card.Title>
              <Card.Text className="card-text">
                {item.node.seo_descripcion}
              </Card.Text>
              <Card.Link className="color-enlace" >
                Leer más
              </Card.Link>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    ))}
  </Row>
</Container>


          </div>


         
        </BlogLayoutPost>
  
        
        
      
      </div>
   
      
          
      
    </div>
  

           



  );
}



