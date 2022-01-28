import { graphql, useStaticQuery } from "gatsby";
export default function usePost() {
  const resultado = useStaticQuery(graphql`
  query strapi {
    allStrapiPost {
      edges {
        node {
          id
          seo_title
          seo_descripcion
          url
          miniatura {
            url
          }
          
        }
      }
    }
      site {
        siteMetadata {
          title
          description
          author
        }
      }
  
    
  }
  ` 

  );
  return resultado;
}
