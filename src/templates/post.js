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




export default function Post(props) {
  const colorFondo = "#031fff";
  const {
    pageContext: { data: post },
  } = props;

  const response = UsePost();
  const dato = response.allStrapiPost.edges;
  const url = props.location.href;


  console.log(post);


 

  return (
    <div >
      <Header colorFondo={colorFondo} />

      <div
        className="image"
        style={{
          background: "rgba(76, 175, 80, 0.1)",
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
            backgroundColor: "#0100ff",
            opacity: "0.7",
          }}
        >
          <h1 className="titulo-post2">{post.titulo_post}</h1>
        </div>
      </div>

      <div  style={{ display: "flex", justifyContent: "center" }}>
        <BlogLayoutPost>
            <Seo
              title={post.seo_title}
              description={post.seo_descripcion}
              image={post.miniatura.url}
            
            ></Seo>


          <div id="bitacora-id"
            style={{ margin: "0 auto !important",   marginBottom: "50px" }}
            dangerouslySetInnerHTML={{ __html: post.contenido_1 }}
          />


      
          <div>
          <ShareButtons title={post.seo_title} url={url} image={post.miniatura.url}  description={post.seo_descripcion}/>
          </div>
          <h1 className="titulo-bitacora">MIRA LO MAS NEVO DE LA BITÁCORA</h1>

          <Container>
            <Row xs={1} md={2}>
              {dato.slice(0, 2).map((item, i) => (
                <Col style={{ display: "flex" }}>
                  <Link to={`/${item.node.url}`}>
                    <Card>
                      <Card.Img className="img-fluid" variant="top" src={item.node.miniatura.url} />
                      <Card.Body>
                        <Card.Title className="titulo-post">
                         {item.node.titulo_post}
                        </Card.Title>
                        <Card.Text className="texto-descripcion">
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
        </BlogLayoutPost>
      </div>
    </div>

                



  );
}



