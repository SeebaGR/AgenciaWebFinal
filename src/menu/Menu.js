import React from "react"
import { Link } from "gatsby";
import SocialMedia from "../SocialMedia"
import "./Menu.scss"
import UsePost from "../hooks/usePost"
import "../componentes/global-styles/estilo.scss"



import { Col, Container } from "react-bootstrap";


export default function Menu (props) {




    const response = UsePost();
    const dato = response.allStrapiPost.edges;

    return(
 
        <div className="menu">
            <Link  to="/">

            <img style={{marginBottom:"20px", marginLeft:"20px"}}
                   
                    className="img-fluid"
                    src="https://agencia-navegantes.s3.amazonaws.com/logo_Azul_d2e73f01e8.png"
                    width="65%"
                    height={242}
                    alt="fantasticaImagen"
                  ></img>

            </Link>

            <p className="parrafos">El 2014 comenzó nuestro viaje a partir de la busqueda de
                 nuevos horizontes en medios digitales.</p>
            <p className="parrafos">Hoy seguimos aprendiendo día a día, gracias a la experiencia que nos han brindado múltiples proyectos con distintas marcas que confían en nuestra tripulación que compone la agencia.</p>
            <p className="parrafos2"></p>

            <h4 className="categoriasB" >Categorias Blog</h4>

            <div style={{fontSize:"18px", lineHeight:"2", display:"grid"}}>
            <Link to="/Categoria/Analitica">
                
            <i className="bi bi-caret-left-fill"  style={{ display:"inline", color:"#0100ff", marginTop: "5px", paddingLeft: "10px" }}></i> Analitica
            </Link>

            
            
            <Link to="/Categori/Desarrollo">
            </Link>
            <Link to="/Categoria/Diseño">
            <i className="bi bi-caret-left-fill"  style={{ display:"inline", color:"#0100ff", marginTop: "5px", paddingLeft: "10px" }}></i> Diseño
            </Link>
            <Link to="/Categoria/Ecommerce">
            <i className="bi bi-caret-left-fill"  style={{ display:"inline", color:"#0100ff", marginTop: "5px", paddingLeft: "10px" }}></i> Ecommerce
            </Link>
            <Link to="/Categoria/Marketing">
            <i className="bi bi-caret-left-fill"  style={{ display:"inline", color:"#0100ff", marginTop: "5px", paddingLeft: "10px" }}></i> Marketing Digital
            </Link>
            <Link to="/Categoria/Performance">
            <i className="bi bi-caret-left-fill"  style={{ display:"inline", color:"#0100ff", marginTop: "5px", paddingLeft: "10px" }}></i> Performance  
            </Link>

            </div>

            <p>---------------------------------------------</p>

            <h2 className="subtitulos"> Ultimas Entradas </h2>


                                     <Container>
                                         <Col >
                                         
                                      {dato.slice(0, 3).map((item,  i) => (
                                        <Link   to={`/${item.node.url}`}>
                                            <h3 className="subtitulos_Ultimas">{item.node.seo_title}</h3>
                                            <p  style={{marginBottom:"30px"}} className="link_leer"  >Leer Màs</p>
                                       

                                            </Link>
                                           ) )} 
                                           
                                            </Col>
                                     </Container>

            <SocialMedia/>
        </div>
    )

}