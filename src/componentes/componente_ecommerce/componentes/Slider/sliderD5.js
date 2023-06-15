import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../estilo.scss"



import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import { Link } from "gatsby";

// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
const SliderD5 = () => {



  
  return (
    <div  >

 <div className="sliderd4for"  >
 <Swiper id="swiperd4"   navigation={true}  

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 70,
            },
          }}

        className="mySwiper" >
        <SwiperSlide>  
        <a href="https://ww2.banchileinversiones.cl/web/personas">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo1_aa8ed9266c.png?v=1658860993"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide> 
 <a href="https://www.everlast.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo2_6508088c93.png?v=1658861021"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://depto51.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo3_e7f04bcbd1.png?v=1658861037"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://limonada.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo4_323456e6ab.png?v=1658861076"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.village.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo44_a5b95858b6.png?v=1658861204"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.billabong.cl">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo6_954211a192.png?v=1658861276"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo7_2d5a9b8fe9.png?v=1658861343"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.blockstore.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo8_0dfaf7076a.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://freemet.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo9_1ba706016d.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.eliteperfumes.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo10_0e79cff970.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.pagofacil.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo11_1d6443c5d0.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.ngx.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo12_456f807984.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.killstore.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo13_fe3760b463.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.hellohello.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo14_49e9ebd026.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.cafecaribe.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo15_b2fea81809.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.fabrics.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo16_176563d162.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://galeriaimpresionarte.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo17_932ec6f248.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.burton.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo18_5334992968.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.pichintun.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo19_0adccb58f0.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://shop.soytendencia.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo20_872f3f0d72.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.zooyork.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo21_6fc47dc7a1.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://clubdelseguro.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo22_e0333ad461.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.amoble.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo23_2e262e5c78.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.overdrive.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo24_7dd88e29de.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.joseherrera.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo25_12b6b672d2.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.mashini.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo26_99adbe13c4.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://tendenciasgourmet.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo27_d2d2b73330.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.erizosstore.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo28_86093601cb.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.forastero.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo29_139a4847b3.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.cadacosaensulugar.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo30_c7f180ebb1.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.lovelust.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo31_17fc118bd2.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.bravaestampa.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo32_aa3bc8247c.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.boazjoyas.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo33_d2138f06d0.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.casachic.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo34_8aea2cf70a.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.braintoys.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo35_387214ff81.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.demarie.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo36_421da04ca3.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.decoporti.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo37_d0942e13c4.png?v=1658861346"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.estacionnatural.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo38_43ef2379a1.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://familyshop.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo39_9278778bf9.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://fondodeculturaeconomica.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo40_cda21127e1.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://kwmarket.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo41_b93e499b85.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.mizos.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo42_8310c7086b.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.sioux.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo43_4250734532.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>   
 
      </Swiper>
      </div  >

    </div>
  );
};

export default SliderD5;