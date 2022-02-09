import React from "react"
import { Link } from "gatsby";

import "./Menu.scss"
import UsePost from "../hooks/usePost"
import "../componentes/global-styles/estilo.scss"



import { Col, Container } from "react-bootstrap";


export default function Menu (props) {




    const response = UsePost();
    const dato = response.allStrapiPost.edges;

    return(
 
        <div className="menu">
            <div >
            <Link className="link-menu-logo" to="/">

            <img style={{marginBottom:"20px"}}
                   loading="lazy"
                    className="img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643137173/logoAzul_ievaqg.png"
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
            <div style={{ width:"300px", paddingTop:"10px",paddingBottom:"10px", borderTop:"dashed 1px #9b9090", borderBottom:"dashed 1px #9b9090"}}>
                
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
            <div style={{width:"300px"}}>
            <h2 style={{marginTop:"20px"}} className="subtitulos"> Ultimas Entradas </h2>


                                     <Container className="ult-etnra">
                                         <Col >
                                         
                                      {dato.slice(0, 3).map((item,  i) => (
                                        <Link   to={`/${item.node.url}`}>
                                            <a href="item.node.url" className="subtitulos_Ultimas">{item.node.seo_title}</a>
                                            <p  style={{marginBottom:"10px"}} className="link_leer"  >Leer Más &gt;</p>
                                       

                                            </Link>
                                           ) )} 
                                           
                                            </Col>
                                     </Container>




                                     <div style={{paddingTop:"10px",paddingBottom:"10px", borderTop:"dashed 1px #9b9090", borderBottom:"dashed 1px #9b9090"}}>
                                     <h1 className="redess">Contacto</h1>
                                     <p style={{color: "#7a7a7a", fontWeight: "200"}} >Si necesitas contactarnos, puedes escribirnos al mail:</p>
                                     <a href="/contacto"><i style={{marginRight:"5px"}} class="bi bi-envelope-open"></i>info@agencialosnavegantes.cl</a>
                                     </div>  
                                     <h1  className="redess sa-redes">Siguenos en RRSS</h1>     

                                     </div>
                                     
                                     <div style={{marginTop:"8px"}} > 
            
            <a href="https://www.facebook.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}   alt="" src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1644434228/Recurso_8_69e7de9f3a.webp" ></img></a>
            <a href="https://www.instagram.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" width={35} height={35} alt="" src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1644434228/Recurso_5_d4746c44ca.webp" ></img></a>
            <a href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}  alt="" src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1644434228/Recurso_7_6133f0c52d.webp" ></img></a>
 
             
             </div>
        </div>
    )

}