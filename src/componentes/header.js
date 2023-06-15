import React, { useState, useEffect } from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";
import "./global-styles/estilo.scss"
import "../componentes/global-styles/layout"
import { Nav, Container, Row, Col } from "react-bootstrap";
import Modal from "./ModalHeader";
const imagen = {
  width: "70%",
};






function Header(props) {


  const renderMetaPixel = () => {
    const scripts = [];
    scripts.push(
      <script key="function" id="facebook-pixel-script">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '355926779996120');
fbq('track', 'PageView');`}
      </script>
    );
    scripts.push(
      <noscript key="image" id="facebook-pixel-image">{`<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=355926779996120&ev=PageView&noscript=1"
      />`}</noscript>
    );
  
    return scripts;
  };


  const [header, setHeader] = useState("header");

  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);







  return (
    <header className={header}>
{renderMetaPixel()}
<meta name="facebook-domain-verification" content="2iso2ymn3vchzg47ukey0iavp1ti08" />
        <Container  className="contenedor-body2">
          <Row  className="row-motin row align-items-center">
            <Col  sm={8} xs={8}>

              <Nav
              
              fixed="top" 
                className="navbar navbar-expand-lg navbar-light"
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              >
                <Nav.Item className=" navbar navbar-light">
                  <Link className=" navbar-brand" to="/">
                  
                    <div class="hoverLogo overlay">
                    <img loading="lazy" 
                 
                      src={"https://cdn.shopify.com/s/files/1/0654/9366/3973/files/seo_image_xhzur3_e6e062dd-7af9-4395-81f2-7fc3b957c87f.webp?v=1659801908"}
                      className="movil-image image img-fluid"
                      alt="primcipal top"
                    ></img>
                    </div>
                 
                  </Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={4} xs={4}>
              <Modal></Modal>
             
            </Col>
          </Row>
        </Container>
        </header>
  )
}



export default Header

