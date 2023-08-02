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
        <div style={{background:"#0100ff", height:"120px"}} ></div>
<img
      loading="lazy"
                alt="principalpruebas"
        key="id1"
        className="pc-for lazyload img iconban "
        src={ImagenBanner}
      ></img>
      <img
      loading="lazy"
                alt="principalpruebas"
        key="id1"
        className="mvilprensa movil-for lazyload "
        src={ImagenMovil}
      ></img>
      </div>
    );
  };
  
  export default sectionPrensa;