import React from 'react'
import Logo from '../img/logo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import one from '../img/one.png'
import Style from '../styles/Banner.module.css'
import texto from '../img/texto.png'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

function Banner() {
  return (
    <div>
        <div>
            <img src={Logo} alt="Imagem da logo" class={Style.logo}/>
        </div>
        <div>
        <Swiper
            style={{
            "--swiper-pagination-color": "#505050",
            "--swiper-theme-color": "#505050",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",

            }}
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{delay:2000}}
            loop
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            425: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1800: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            }}
            >
            <SwiperSlide><img src={one} alt="" class={Style.img}/></SwiperSlide>
            <SwiperSlide><img src={one} alt="" class={Style.img}/></SwiperSlide>
            <SwiperSlide><img src={one} alt="" class={Style.img}/></SwiperSlide>
            <SwiperSlide><img src={one} alt="" class={Style.img}/></SwiperSlide>
            <SwiperSlide><img src={one} alt="" class={Style.img}/></SwiperSlide>
            <SwiperSlide><img src={one} alt="" class={Style.img}/></SwiperSlide>
            </Swiper>
    </div>
    <div className={Style.lastdiv}>
        <img src={texto} alt="" />
      </div>
    </div>
  )
}

export default Banner
