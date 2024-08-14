// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'

import style from '../styles/marca.module.css'

//Import de Imagens
import Image1 from '../img/adidas.webp'
import Image2 from '../img/asics.webp'
import Image3 from '../img/converse.webp'
import Image4 from '../img/everlast.avif'
import Image5 from '../img/joma.webp'
import Image6 from '../img/jordan.webp'
import Image7 from '../img/lacoste.webp'
import Image8 from '../img/mizuno.webp'
import Image9 from '../img/nike.webp'
import Image10 from '../img/nord.webp'
import Image11 from '../img/oakley.avif'
import Image12 from '../img/oxer.avif'
import Image13 from '../img/reebok.webp'
import Image14 from '../img/spalding.avif'
import Image15 from '../img/ulhsport.webp'
import Image16 from '../img/umbro.webp'
import Image17 from '../img/under-armour.webp'




import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay, EffectFade } from 'swiper/modules';

function marca(){
    const marcas = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14,Image15, Image16,Image17]
    return(
        <>
            <div className={style.container} id='carrossel'>
            <h2>CONHEÇA NOSSAS MARCAS</h2>
            <Swiper
                style={{
                    "--swiper-pagination-color": "#505050",
                    "--swiper-theme-color": "#505050",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",

                    }}
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}
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
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    }}
            >
                {marcas.map(slides => 
                    <SwiperSlide>
                        <img src={slides} alt={slides} className={style.item}/>
                    </SwiperSlide>
                    )}
            </Swiper>
        </div>
        </>
    )
}

export default marca;