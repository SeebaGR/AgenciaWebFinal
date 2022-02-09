import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import SocialMedia from "../SocialMedia/socialfooter"
import "../componentes/global-styles/estilo.scss"
const footer = () => {

  const linea = {
    marginTop: "-3px",
    backgroundColor: "#0100fe",
    height: "2px",
    width: "75%",
  };
  const texto = {
    lineHeight: "1em",
    fontSize: "22px",
    color: "#212529",
    fontWeight: "300",
  };
  const estiloImagen = {
    width: "60%",
  };

  const iconos = {
    fontSize: "28px",
    color: "#3b39ff"

  }


  return (
    <div className="footer-padding">
      <hr style={{ backgroundColor: "#f1ecec", }}></hr>
      <Container className="contenedor-footer">
        <Row style={{ paddingLeft: "100px", paddingRight: "100px", paddingBottom: "30px" }} className="footer-row justify-content-center mt-3" >
          <Col className="text-center">
            <div className="fo-img2-fo" >
              <a href="/">
                <img
                loading="lazy"
                  width={165}
                  height={133}
                  src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643890427/logo_Azul_ievaqg_1254029da8.webp"
                  class="fo-img-fo hoverLogo overlay"
                  alt=""
                ></img>
              </a>
            </div>
          
           
            
           
           
          </Col>
          <Col sm={3}>
            <h2 className="menu-tit" style={texto}>Menú</h2>

            <hr className="lineal" style={linea}></hr>
            <ul>
              <li>
                <Link className="navbar-brand" to="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/tripulacion">
                  Tripulación
                </Link>
              </li>
              <li>
                <a
                  className="navbar-brand"
                  href="https://ecommerce.agencialosnavegantes.cl/"
                >
                  Desarrollo web
                </a>
              </li>
              <li>
                <Link className="navbar-brand" to="/marketing-digital">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/analitica-performance">
                  Anlítica y Performance
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </Col>
          <Col style={{ display: "grid" }} sm={3}>
            <h2 style={texto}>Pertenecemos a</h2>
            <hr className="lineal" style={linea}></hr>
            <img className="img-footer-w"
              width={157}
              height={43}
              loading="lazy"
              src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643857212/camara_Santiago_52af1426bb.webp"
              alt="ss"
            ></img>
            <img className="img-footer-w"
              width={146}
              height={65}
              loading="lazy"
              src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643857212/sector29_acd0e70588.webp"
              alt=""
            ></img>
            <img className="img-footer-w"
              loading="lazy"
              width={146}
              height={73}

              src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643857212/Mesa_de_trabajo1_1347ae4001.webp"
              alt=""
            ></img>
            <img className="img-footer-w"
              width={146}
              height={73}
              loading="lazy"
              src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643857276/Mesa_de_trabajo3_6642ab2ffb.webp"
              alt=""
            ></img>
            <img className="img-footer-w"
              width={146}
              height={61}
              loading="lazy"
              src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643856973/jumpseller_Listo335_1_haniq0_fe57d5e548.webp"
              alt=""
            ></img>
            <img className="img-footer-w"
              width={146}
              height={73}
              loading="lazy"
              src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643857212/logo_klaviyo_master_5cfdb3c7d6.webp"
              alt=""
            ></img>
          </Col>
          <Col sm={3}>
            <h2 style={texto}>Nuestras Empresas</h2>

            <hr className="lineal" style={linea}></hr>
            <ul>
              <li>
                <a className="navbar-brand" href="https://www.fbadschile.cl/">
                  FB Ads Chile
                </a>
              </li>
              <li>
                <a
                  className="navbar-brand"
                  href="https://www.academiametrics.com/"
                >
                  Academia Metrics
                </a>
              </li>
              <li>
                <a
                  className="navbar-brand"
                  href="https://www.matiasvillanueva.com/"
                >
                  Matías Villanueva
                </a>
              </li>
              <li>
                <a
                  className="navbar-brand"
                  href="https://www.autodidactasdigitales.com/"
                >
                  Autodidactas Digitales
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default footer;
