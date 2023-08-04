
import React from "react";

import {  Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../componentes/global-styles/estilo.scss"

import vidio from "../images/pantt.webp";







export const SectionVideo = (props) => {
  const [show, setShow] = React.useState(true);


  return (
    <div className="padd-padd" style={{ textAlign:"center",  paddingTop: "40px", paddingBottom: "40px", background: props.colorFondo }}>

      <iframe className="lazyframe videoiframe2" width="778" height="400" src="https://www.youtube.com/embed/kMPNdhu54xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe className="lazyframe videoiframe1" width="380" height="270" src="https://www.youtube.com/embed/kMPNdhu54xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
   
  );
};

export default SectionVideo;


