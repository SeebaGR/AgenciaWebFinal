import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../global-styles/layout"


import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";


// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
const slidertesti = () => {


  
  return (
    <div className="paddslidereviews"   >
<div className="revDiv"  >


 
 <Swiper style={{marginBottom:"60px"}} id="swiperReviews2"   navigation={true}    
              spaceBetween={40} autoplay={{
                delay: 4000
            }}
            modules={[Pagination]}
   
        breakpoints={{
          "360": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "400": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "640": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "768": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "1024": {
            "slidesPerView": 1,
            "spaceBetween": 30
          }
        }}
      
        className="poupau mySwiper" >

<SwiperSlide>  
<iframe src="https://player.vimeo.com/video/926398171?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" className="tititu"   frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"   title="Bárbara Momberg"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
</SwiperSlide>
<SwiperSlide>  
<iframe src="https://player.vimeo.com/video/926398733?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  className="tititu"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"   title="Rosario Álvarez-"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
</SwiperSlide>
<SwiperSlide>  
<iframe src="https://player.vimeo.com/video/926398580?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  className="tititu"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"   title="Natalia Vergara"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
</SwiperSlide>
<SwiperSlide>  
<iframe src="https://player.vimeo.com/video/926398476?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  className="tititu"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"   title="Magdalena Molina-"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
</SwiperSlide>

<SwiperSlide>  
<iframe src="https://player.vimeo.com/video/926398244?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" className="tititu"   frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"   title="Guillermo Barros"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
</SwiperSlide>

<SwiperSlide>  
<iframe src="https://player.vimeo.com/video/926398836?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  className="tititu"    frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"   title="Ignacio Inostroza-"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
</SwiperSlide>

<SwiperSlide>  
<iframe src="https://player.vimeo.com/video/926398661?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"   className="tititu" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"   title="Rodrigo Cádiz Marco Fernández"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
</SwiperSlide>

        
      </Swiper>

      </div>   </div>

  );
};

export default slidertesti;