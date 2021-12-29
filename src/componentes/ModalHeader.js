import React from "react";
import { Modal, Nav, Button, Col, Row, Container } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";
import "../componentes/global-styles/estilo.scss"

function ModalHeader() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);

  return (
    <div>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Collapsed content</h4>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark nh">
          <button
            onClick={() => setShow(true)}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              style={{ width: "25%" }}
              src="https://agencialosnavegantes.s3.amazonaws.com/menu_hamburguesa_880ab0ce56.png"
              className="imagen-menu"
              alt=""
            ></img>
          </button>
        </nav>
      </div>

      <Modal style={{backgroundColor:"rgba(0,0,0,.8)"}}
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body >
          <Container style={{ float:"left" }}>
            <Row style={{ alignItems: "center", justifyContent: "end",   width: "100%", height: "969px" }}>
              <Col sm={3} style={{ padding: "0px", margin: "0px" }}></Col>
              <Col sm={6} style={{ lineHeight: "2", marginBottom: "250px" }}>
                <Nav.Item id="myDIV">
                  <Link
                    className="navbar-brand item-menu  "
                    to="/"
                    activeStyle={{
                      color: "#cdcd41",
                      fontWeight: 700
                    }}
                    style={{ fontSize: "32px" }}
                  >
                    Inicio
                  </Link>
                </Nav.Item>
                <Nav.Item className="navbar-brand">
                  <Link
                    className="navbar-brand item-menu  "
                    to="/tripulacion"
                    activeStyle={{
                      color: "#cdcd41",
                      fontWeight: 700
                    }}
                    style={{ fontSize: "32px" }}
                  >
                    Tripulación
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <a
                    className="navbar-brand item-menu "
                    href="https://ecommerce.agencialosnavegantes.cl/"
                    style={{ fontSize: "32px" }}
                  >
                    Desarrollo Web
                  </a>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    className="navbar-brand item-menu"
                    to="/marketingdigital"
                    style={{ fontSize: "32px" }}
                    activeStyle={{
                      color: "#cdcd41",
                      fontWeight: 700
                    }}
                  >
                    Marketing Digital
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    className="navbar-brand item-menu"
                    to="/analiticayperformance"
                    style={{ fontSize: "32px" }}
                    activeStyle={{
                      color: "#cdcd41",
                      fontWeight: 700
                    }}
                  >
                    Anlítica y Performance
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    className="navbar-brand item-menu"
                    to="/blog"
                    style={{ fontSize: "32px" }}
                    activeStyle={{
                      color: "#cdcd41",
                      fontWeight: 700
                    }}
                  >
                    Blog
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    className="navbar-brand item-menu"
                    to="/contacto"
                    style={{ fontSize: "32px" }}
                    activeStyle={{
                      color: "#cdcd41",
                      fontWeight: 700
                    }}
                  >
                    Contacto
                  </Link>
                </Nav.Item>
              </Col>
              <Col sm={3} style={{ padding: "0px", margin: "0px" }}></Col>
           

            </Row>
          </Container>

          <div style={{ float:"right"}}>

          <Button
                  style={{
                    display: "inline",
                    background: "transparent",
                    border: "none",
                    fontSize: "80px",
                    
                  }}
                  onClick={handleClose}
                >
                  <i className="bi bi-x"></i>
                </Button>

          </div>

        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalHeader;
