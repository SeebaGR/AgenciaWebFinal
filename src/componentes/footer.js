import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import "../componentes/global-styles/estilo.scss"
const footer = () => {

  const linea = {
    marginTop:"-3px",
    backgroundColor: "#0100fe",
    height: "5px",
    width: "75%",
  };
  const texto = {
    lineHeight:"1em",
    fontSize: "22px",
    color: "#212529",
    fontWeight: "300",
  };
  const estiloImagen = {
    width: "60%",
  };
 
  const iconos = {
    fontSize:"28px",
    color:"#3b39ff"

    }


  return (
    <div className="footer-padding">
      <hr style={{ backgroundColor: "#f1ecec", }}></hr>
      <Container  className="contenedor-footer">
        <Row style={{paddingLeft:"100px", paddingRight:"100px", paddingBottom:"30px"}} className="footer-row justify-content-center mt-3" >
          <Col  className="text-center">
            <div className="fo-img2-fo" >
            <a  href="/">
              <img
               
                src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643137173/logoAzul_ievaqg.png"
                class="fo-img-fo hoverLogo overlay"
                alt=""
              ></img>
            </a>
            </div>
            <Row className="foter-icon" >
              
              <Col className="ssrrPc" sm="2">
                <a href="https://www.facebook.com/agencialosnavegantes/">
                <i  style={iconos}className="hoverAds bi bi-facebook"></i>
                </a>
              </Col>
              <Col  className="ssrrPc" sm="2">
              <a href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/">
                <i style={iconos}className="hoverAds bi bi-linkedin"></i>
                </a>
              </Col>
              <Col className="ssrrPc"  sm="2">
              <a  href="https://www.instagram.com/agencialosnavegantes/">
                <i style={iconos}className="hoverAds bi bi-instagram"></i>
                </a>
              </Col>
              
              <Col  className="ssrrMovil" sm="2">
              <a className="rssLink" href="https://www.facebook.com/agencialosnavegantes/">
                <i  style={iconos}className="hoverAds bi bi-facebook"></i>
                </a>
              <a className="rssLink" href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/">
                <i style={iconos}className="hoverAds bi bi-linkedin"></i>
                </a>
              <a className="rssLink"  href="https://www.instagram.com/agencialosnavegantes/">
                <i style={iconos}className="hoverAds bi bi-instagram"></i>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm={3}>
            <h2 className="menu-tit" style={texto}>Menú</h2>

            <hr style={linea}></hr>
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
          <Col style={{display:"grid"}} sm={3}>
            <h2 style={texto}>Pertenecemos a</h2>
            <hr style={linea}></hr>
            <img className="img-footer-w"
              style={estiloImagen}
              src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643137255/camaraSantiago_fiv4qk.jpg"
              alt=""
            ></img>
            <img className="img-footer-w"
              style={estiloImagen}
              src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643137255/sector29_kpbkh6.png"
              alt=""
            ></img>
            <img className="img-footer-w"
              style={estiloImagen}
              src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643137255/Mesa-de-trabajo1_gmcm8n.png"
              alt=""
            ></img>
            <img className="img-footer-w"
              style={estiloImagen}
              src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643137255/Mesa-de-trabajo3_4_gxwyvj.png"
              alt=""
            ></img>
            <img className="img-footer-w"
              style={estiloImagen}
              src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643137255/jumpsellerListo335_1_haniq0.png"
              alt=""
            ></img>
            <img className="img-footer-w"
              style={estiloImagen}
              src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643137254/logo_klaviyo_master_1_ko6ofb.jpg"
              alt=""
            ></img>
          </Col>
          <Col sm={3}>
            <h2 style={texto}>Nuestras Empresas</h2>

            <hr style={linea}></hr>
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
