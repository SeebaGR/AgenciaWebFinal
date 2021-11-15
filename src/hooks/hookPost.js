import { graphql, useStaticQuery } from "gatsby";
export default function usePost() {
  const resultado = useStaticQuery(graphql`
  query {
    allStrapiPost ( sort: { fields: id_post, order: ASC }) {
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
  ` 

  );
  return resultado;
}
