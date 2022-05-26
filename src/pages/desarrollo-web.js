import React from "react";
import Header from "../componentes/header"
import Footer from "../componentes/footer"
import Sectionbanner from "../componentes/componentes_desarrollo/section_bannerD"
import Seccionmkt3 from "../componentes/componentes_desarrollo/Section_d3"
import SeccionMkt2 from "../componentes/componentes_desarrollo/Section_d2"
import Slider from "../componentes/componentes_home/slider"
import SectionContacto from "../componentes/SectionContacto"
import SectionInstagram from "../componentes/SectionInstagram";
import "../componentes/global-styles/layout"
import Seo from "../componentes/seo"
import Seccionmkt4 from "../componentes/componentes_mkt/seccion_mkt4"
import Seccionmkt5 from "../componentes/componentes_mkt/seccion_mkt5"
import Seccionmkt6 from "../componentes/componentes_mkt/seccion_mkt6"
import Seccionmkt7 from "../componentes/componentes_mkt/seccion_mkt7"



function desarrolloWeb() {
  
  return (
    <div>
      <Seo
              title="Marketing Digital, Google Adwords y Facebook Ads"
  
            ></Seo>
      <Header id="mktmkt" ></Header>
      <Sectionbanner></Sectionbanner>
      <SeccionMkt2></SeccionMkt2>
      <Seccionmkt3></Seccionmkt3>
      <div style={{background:"#91D2D2", height:"20px"}}></div >
      <Seccionmkt4></Seccionmkt4>
      <div style={{background:"#5D57DD", height:"20px"}}></div >
      <Seccionmkt5></Seccionmkt5>
      <Seccionmkt6></Seccionmkt6>
      <Seccionmkt7></Seccionmkt7>
    
      <Footer />

      





    </div>
  );
}

export default desarrolloWeb;
