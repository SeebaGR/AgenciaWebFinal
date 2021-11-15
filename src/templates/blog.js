import React from "react"
import { graphql } from "gatsby"
import BlogLayout from "../BlogLayout"
import PostList from "../PostList"
import Pagination from "../Pagination"



export default function Blog (props) {

    
  const { data, pageContext } = props
  const posts = data.allStrapiPost.nodes;
  console.log(props)

    return(  

        <BlogLayout>

            
   
        </BlogLayout>


    )
}

export const query = graphql`
query queryBLog  {
    allStrapiPost (
   
        sort: { fields: id_post, order: ASC}

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
  }` 


 