import React from "react";
import { graphql } from "gatsby";

import BlogLayout from "../BlogLayout";
import PostList from "../PostList/PostList";
import Pagination from "../Pagination";
import Header from "../componentes/header"

import bannerBitacora from "../images/bitacora.jpg"


const blog = (props) => {
  const { data, pageContext } = props;
  const posts = data.allStrapiPost.nodes;
  
  //const colorFondo = "#031fff";
  console.log(posts);

  return (
    <React.Fragment>
      <Header  style={{ background:"rgba(0, 0, 255, 0.45)" }} /> <Header/>
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
          backgroundImage:`url(${bannerBitacora})`,
          transition: "background 0.3s  borderRadius 0.3s",
          height: "450px",
          width: "100%",
        }}
      >
        <div className="row"
          style={{
            textAlign:"center",
            alignItems: "center",
            display: "grid",
            justifyContent: "center",
            transition: "background .3s,border-radius .3s,opacity .3s",
            width: "100%",
            height: "100%",

            backgroundColor: "#0100ff",
            opacity: "0.7",
          }}
        >
          <div >
          <h1 className="titulo-post2">La Bitácora</h1> 
          <h3 style={{ color: "#fff", fontSize: "25px",fontWeight:"300"}}>Nuestro Blog de Contenidos Digitales para que siempre estes al día con nuestras Noticias</h3>
          </div>
        </div>
      </div>
    <BlogLayout>
     
      <PostList posts={posts} />
      <Pagination  pageContext={pageContext} />
      
    </BlogLayout>

    
    </React.Fragment>
    
  );
};

export default blog;
export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allStrapiPost(
      skip: $skip
      limit: $limit
      sort: { fields: id_post, order: ASC }
    ) {
      nodes {
        id
       
        id_post
        titulo_post
        url
        contenido_1
        seo_title
        seo_descripcion
        miniatura {
          url
        }
        image_banner {
          url
        }
      }
    }
  }
`;
