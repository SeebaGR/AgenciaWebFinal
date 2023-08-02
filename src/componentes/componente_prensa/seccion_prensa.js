import React from "react";
import "../global-styles/layout";
import { Col, Row, Container } from "react-bootstrap";
import UsePrensa from "../../hooks/usePrensa";

const sectionPrensa = () => {
    const response = UsePrensa();
    const data = response.allStrapiPrensa.nodes[0];
  
    const ImagenBanner = data.link_banner_escritorio_prensa;
    const ImagenMovil = data.link_banner_movil;

  
   
    return (
      <div>
<img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
        key="id1"
        className="lazyload img iconban "
        src={ImagenBanner}
      ></img>
      </div>
    );
  };
  
  export default sectionPrensa;