import React from "react";
import "../global-styles/layout";
import { Col, Row, Container } from "react-bootstrap";
import UsePrensa from "../../hooks/usePrensa";

const sectionPrensa = () => {
    const response = UsePrensa();
    const data = response.allStrapiPrensa.nodes[0];
  
    const ImagenBanner = data.link_banner_escritorio_prensa;
    const ImagenMovil = data.link_banner_movil;
    const Bannerescritorio = { 
      backgroundImage: `url(${ ImagenBanner })` 
    }
  
   
    return (
      <div>
        <div className="sct3prensa" style={Bannerescritorio} ></div>

      </div>
    );
  };
  
  export default sectionPrensa;