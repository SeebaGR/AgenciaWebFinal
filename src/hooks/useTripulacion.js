import { graphql, useStaticQuery } from "gatsby";
export default function useTripulacion() {
  const resultado = useStaticQuery(graphql`
  query MyQueryTripulacion {
    allStrapiTripulacion {
      nodes {
        tripulacion_seccion1
        tripulacion_seccion2
      
        tripulacion_seccion11
      }
    }
  }
  
  
  `);
  return resultado;
}