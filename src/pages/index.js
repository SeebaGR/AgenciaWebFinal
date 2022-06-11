import React from "react";

import "../componentes/global-styles/layout"
import Header from "../componentes/header"
import Footer from "../componentes/footer"
import SectionBannerHome from "../componentes/componentes_home/sectionBannerHome"
import SectionAgencia from "../componentes/componentes_home/sectionAgencia"
import Sectionolas from "../componentes/sectionolas"
import SectionMarketing from "../componentes/componentes_home/sectionMarketing"
import SectionAnaliticaPerformance from "../componentes/componentes_home/sectionAnaliticaPerformance"
import SectionDesarrollo from "../componentes/componentes_home/sectionDesarrollo"
import Seo from "../componentes/seo"
import SectionBlog from "../componentes/componentes_home/sectionBlog"
import Video from "../componentes/SectionVideo"
import "../componentes/global-styles/estilo.scss"
import SectionSomoPartners from "../componentes/componentes_home/sectionSomoPartners"
import SectionSobreNosotros from "../componentes/componentes_home/sectionSobreNosotros"
import SectionSumate from "../componentes/componentes_home/sectionSumate"
import SeparadorOlasSirena from "../componentes/separadorOlasSirena"
import SectionSaberMas from "../componentes/componentes_home/sectionSaberMas";
import SectionInstagram from "../componentes/SectionInstagram"
import Slider from "../componentes/componentes_home/slider"
import SectionContacto from "../componentes/SectionContacto"
import SliderViews from "../componentes/componentes_home/sliderReviews"
import Helmet from "react-helmet"
const IndexPage = () => {
  const colorFondo= "#031fff"


  return (
    
    <React.Fragment >
      <Seo
              title="Agencia de Marketing Digital, eCommerce y Performance"
  
            ></Seo>

<Helmet>
<script async src="https://www.googletagmanager.com/gtag/js?id=GTM-NR96Z4S"></script>
  <script type="application/ld+json">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('config', 'GTM-NR96Z4S');
  `}</script>
  
        </Helmet>     




      <body> 
       
      <Header colorFondo={colorFondo} />
      <SectionBannerHome></SectionBannerHome>
      <Sectionolas></Sectionolas>
     
      <SectionAgencia ></SectionAgencia>
    
      <SectionMarketing></SectionMarketing>
      <SectionAnaliticaPerformance></SectionAnaliticaPerformance>
      <SectionDesarrollo></SectionDesarrollo>
      
      <Slider id="slider-movil" ></Slider>
      
      
      
      <SectionSobreNosotros></SectionSobreNosotros>
      <Video></Video>
      <SectionSomoPartners></SectionSomoPartners>

      <SliderViews></SliderViews>


      <SectionSumate></SectionSumate>
  
      <SectionContacto></SectionContacto>
   
      <SectionSaberMas></SectionSaberMas>
      <SectionBlog></SectionBlog>
      <SectionInstagram></SectionInstagram>
      <Footer />
      </body> 
    </React.Fragment>
   
  );
};

export default IndexPage;
