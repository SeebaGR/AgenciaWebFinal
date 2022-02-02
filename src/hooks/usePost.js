import { graphql, useStaticQuery } from "gatsby";
export default function usePost() {
  const resultado = useStaticQuery(graphql`
  query strapi {
    allStrapiPost {
      edges {
        node {
          id
          create_dia
          create_hora
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
