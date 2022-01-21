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
            <div>
            <Link  to="/">

            <img style={{marginBottom:"20px", marginLeft:"20px"}}
                   
                    className="img-fluid"
                    src="https://agencia-navegantes.s3.amazonaws.com/logo_Azul_d2e73f01e8.png"
                    width="65%"
                    height={242}
                    alt="fantasticaImagen"
                  ></img>

            </Link>
            </div>
            <p className="parrafos">El 2014 comenzó nuestro viaje a partir de la busqueda de
                 nuevos horizontes en medios digitales.</p>
            <p className="parrafos">Hoy seguimos aprendiendo día a día, gracias a la experiencia que nos han brindado múltiples proyectos con distintas marcas que confían en nuestra tripulación que compone la agencia.</p>
            <p className="parrafos2"></p>
            <div style={{paddingTop:"10px",paddingBottom:"10px", borderTop:"dashed 1px #9b9090", borderBottom:"dashed 1px #9b9090"}}>
                
                            <h4 className="categoriasB" >Categorias Blog</h4>

            <div style={{fontSize:"18px", lineHeight:"2", display:"grid"}}>
            <Link to="/categoria/analitica">
                
            <i className="bi bi-caret-left-fill"  style={{ display:"inline", color:"#0100ff", marginTop: "5px" }}></i> Analitica
            </Link>

            
            
            <Link to="/categori/desarrollo">
            </Link>
            <Link to="/categoria/diseño">
            <i className="bi bi-caret-left-fill"  style={{ display:"inline", color:"#0100ff", marginTop: "5px"}}></i> Diseño
            </Link>
       
            <Link to="/categoria/marketing">
            <i className="bi bi-caret-left-fill"  style={{ display:"inline", color:"#0100ff", marginTop: "5px" }}></i> Marketing Digital
            </Link>
            <Link to="/categoria/performance">
            <i className="bi bi-caret-left-fill"  style={{ display:"inline", color:"#0100ff", marginTop: "5px" }}></i> Performance  
            </Link>

            </div>

            </div>

            <h2 style={{marginTop:"20px"}} className="subtitulos"> Ultimas Entradas </h2>


                                     <Container className="ult-etnra">
                                         <Col >
                                         
                                      {dato.slice(0, 3).map((item,  i) => (
                                        <Link   to={`/${item.node.url}`}>
                                            <h3 className="subtitulos_Ultimas">{item.node.seo_title}</h3>
                                            <p  style={{marginBottom:"30px", marginTop:"10px"}} className="link_leer"  >Leer Màs</p>
                                       

                                            </Link>
                                           ) )} 
                                           
                                            </Col>
                                     </Container>




                                     <div style={{padding:"10px", borderTop:"dashed 1px #9b9090", borderBottom:"dashed 1px #9b9090"}}>
                                     <h1 className="redess">Contacto</h1>
                                     <p style={{color: "#7a7a7a", fontWeight: "200"}} >Si necesitas contactarnos, puedes escribirnos al mail:</p>
                                     <a href="/contacto"><i style={{marginRight:"5px"}} class="bi bi-envelope-open"></i>info@agencialosnavegantes.cl</a>
                                     </div>  
                                     <h1 style={{marginTop:"20px"}} className="redess">Siguenos en RRSS</h1>     
                                     
            <SocialMedia/>
        </div>
    )

}