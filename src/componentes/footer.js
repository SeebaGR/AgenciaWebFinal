import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

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
                  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646659738/logoAzul_egggb8.webp"
                  class="fo-img-fo hoverLogo overlay"
                  alt=""
                ></img>
              </a>
            </div>
            <div style={{marginLeft:"-10px",marginTop:"20px"}} className="ssrrPc"> 
            
           <a href="https://www.facebook.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}   alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_8_1_wrgkza.webp" ></img></a>
           <a href="https://www.instagram.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" width={35} height={35} alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_5_1_byazco.webp" ></img></a>
           <a href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}  alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_7_1_s18050.webp" ></img></a>

            
            </div>
            <div style={{ marginTop: "15px", marginLeft: "12px"}} className="ssrrMovil">

            <a href="https://www.facebook.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}   alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_8_1_wrgkza.webp" ></img></a>
           <a href="https://www.instagram.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" width={35} height={35} alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_5_1_byazco.webp" ></img></a>
           <a href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}  alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_7_1_s18050.webp" ></img></a>

            

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
              src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661986/camaraSantiago_1_gaqryr.webp"
              alt="ss"
            ></img>
            <img className="img-footer-w"
              width={146}
              height={65}
              loading="lazy"
              src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661986/sector29_1_qapibo.webp"
              alt=""
            ></img>
            <img className="img-footer-w"
              loading="lazy"
              width={146}
              height={73}

              src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661985/Mesa-de-trabajo1_2_qhzdbk.webp"
              alt=""
            ></img>
            <img className="img-footer-w"
              width={146}
              height={73}
              loading="lazy"
              src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661986/Mesa-de-trabajo3_7_qlq6xb.webp"
              alt=""
            ></img>
            <img className="img-footer-w"
              width={146}
              height={73}
              loading="lazy"
              src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661673/logo_klaviyo_master_2_85cfaef4ab.webp"
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
