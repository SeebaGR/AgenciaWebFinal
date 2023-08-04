import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Navigation } from "swiper";
import "../global-styles/layout"
import UsePrensa from "../../hooks/usePrensa"
// import required modules

const sectionBlogprensa = () => {
    const response = UsePrensa();
    const data = response.allStrapiPrensa.nodes[0].blog_prensa;
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
  
   
    return (
      <div className="padprensa" style={{marginTop:"40px"}}>
        <Container className="pc-for">

        <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        breakpoints={{
            400: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView:1,
              spaceBetween: 10,
              grid: 3,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
              slidesPerGroup: 3,
            },
          }}

        spaceBetween={30}
        pagination={pagination}
        modules={[Grid, Pagination]}
        className="mySwiper padswiper"
      >

        {data.map((item, i) => (
            <SwiperSlide>
        <a href={item.link_blog_prensa} target="_blank">
               <Card>

                 <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src={item.link_imagen_post} />

                 <Card.Body id="ccccc2" className="card-body-post" >
                  <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>{item.etiqueta_blog_prensa}</span>
                   <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
                    
                    {item.titulos_blog_prensa}
                   </Card.Title>
               
                   <Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
                     {item.descripcion_blog_prensa}
                   </Card.Text>
        
             
                 </Card.Body>
               </Card>
               </a>
</SwiperSlide>
            ))}

            </Swiper>


</Container>
<Container className="movil-for">

<Swiper
slidesPerView={1}
grid={{
  rows: 4,
}}
breakpoints={{
    400: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView:1,
      spaceBetween: 10,
      grid: 3,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 3,
    },
  }}

spaceBetween={30}
pagination={pagination}
modules={[Grid, Pagination]}
className="mySwiper padswiper"
>

<SwiperSlide>
    
    
    <Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/5.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>TV: La Tercera TV</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
¿Cómo hacer una campaña de marketing digital? | Agencia Los Navegantes 
</Card.Title>
</Card.Body>
</Card>


    </SwiperSlide>

    <SwiperSlide>


    <Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/6.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Periódico: El Día</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Agencia Los Navegantes y Matías Villanueva en Diario el Día, La Serena. 
</Card.Title>
</Card.Body>
</Card>

    </SwiperSlide>
    <SwiperSlide>

    <Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/2_29e4d9bf-7062-486d-b71c-71d82c5c226c.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Periódico: LUN</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Fundadores de Agencia Los Navegantes cuentan cómo crearon su empresa. 
</Card.Title>
</Card.Body>
</Card>

    </SwiperSlide>
    <SwiperSlide>


    <Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/9.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>YouTube: Vilma Nuñez</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Matías Villanueva entrevista a Vilma Nuñez, experta en Marketing Digital.
</Card.Title>
</Card.Body>
</Card>


    </SwiperSlide>
    <SwiperSlide>



    <Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/17.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Corfo: Pymes en Línea</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Cómo re-activar tu Pyme con Marketing Digital | Agencia Los Navegantes
</Card.Title>
</Card.Body>
</Card>

      
   

    </SwiperSlide>
   
    </Swiper>


</Container>



      </div>
    );
  };
  
  export default sectionBlogprensa;