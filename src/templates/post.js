import React from "react";
import BlogLayoutPost from "../BlogLayout/BlogLayoutPost";
import "../templates/post/post.scss";
import { Link } from "gatsby";
import {InlineShareButtons} from 'sharethis-reactjs';
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


console.log(post)

 

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
          <h1 style={{width:"63%", margin:"0 auto"}} className="titulo-post2">{post.titulo_post}</h1>
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
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>Comparte por facebook</a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>Comparte en LinkedIn</a>
 
          <a href={`https://twitter.com/intent/tweet?text=Te%20recomiendo%20esta%20plataforma%20de%20cursos%20de%20programación,%20a%20mí%20me%20ha%20ayudado%20mucho&url=${url}&hashtags=tambienSoyEDteam`}>Twitter</a>
<h1 className="titulo-bitacora">MIRA LO MAS NUEVO DE LA BITÁCORA</h1>
          <h1>Inline Share Buttons</h1>
        <h1>Inline Share Buttons</h1>
        <InlineShareButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            labels: 'cta',        // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'whatsapp',
              'linkedin',
              'messenger',
              'facebook',
              'twitter'
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,
            size: 40,             // the size of each button (INTEGER)
 
            // OPTIONAL PARAMETERS
            url: 'https://www.sharethis.com', // (defaults to current url)
            image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: 'custom text',       // (defaults to og:description or twitter:description)
            title: 'custom title',            // (defaults to og:title or twitter:title)
            message: 'custom email text',     // (only for email sharing)
            subject: 'custom email subject',  // (only for email sharing)
            username: 'custom twitter handle' // (only for twitter sharing)
          }}
        />

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



