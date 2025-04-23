import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




// import required modules

import {Zoom, Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {


    return (
        <div>

           <Swiper 
      spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        lazy={true}
        zoom={true}
        navigation={true}
        modules={[Zoom,Autoplay, Pagination, Navigation]}
        className="mySwiper mx-auto h-[250px] lg:w-screen lg:h-[355px]"
        
      >
        <SwiperSlide>
            <div className="swiper-zoom-container ">

            <img className='object-cover w-svw lg:h-[350px]  mx-auto' src="https://i.ibb.co/5FNv515/wristwatch-1766858-1280.jpg" alt="watch" loading="lazy"/>
            </div>
           
            
        </SwiperSlide>
        <SwiperSlide>

            <div className="swiper-zoom-container ">

            <img className='object-cover mx-auto  w-svw lg:h-[350px]  ' src="https://i.ibb.co/tZMs47p/technology-7105517-1280.jpg" alt="technoloy" loading="lazy" />

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-zoom-container ">

            <img className='object-cover mx-auto  w-svw lg:h-[350px]  ' src="https://i.ibb.co/PTgrDj9/keyboard-933568-1280.jpg" alt="keyboard" loading="lazy"/>
            </div>

        </SwiperSlide>

        <SwiperSlide>
            <div className="swiper-zoom-container">
                <img className='object-cover mx-auto  min-w-screen ' src="https://i.ibb.co/r2WXjMh/bulb-1306311-1280.jpg" alt="bulb" loading="lazy"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-zoom-container">
            <img className='object-cover mx-auto min-w-screen  h-[350px] ' src="https://i.ibb.co/Rbh4Xbt/ai-generated-7733733-1280.jpg" alt="ai-gen" loading="lazy"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-zoom-container">
            <img  className='object-cover mx-auto  w-svw lg:h-[350px]  ' src="https://i.ibb.co/LSmvq49/smartphone-2568602-1280.jpg" alt="smartphone" loading="lazy"/>
            </div>
        </SwiperSlide>
      
      
      </Swiper>  
        </div>
    );
};

export default Banner;