import React from 'react';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCoverflow} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

SwiperCore.use([Navigation, Pagination, A11y, Scrollbar, EffectFade, EffectCoverflow]);

export default ({urlArray}) => {
    //console.log(urlArray);
    return (
        <Swiper
            speed = {2000}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            effect ="coverflow"
            grabCursor = {true}
            centeredSlides = {true}
            coverflowEffect = {
                {   rotate: 150,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows : true,
                }
            }
            //slidesPerView = 'auto'
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            {urlArray.map((el, i) => {
                return <SwiperSlide key={i}><img src={el}/></SwiperSlide>;
            })
            }
       </Swiper>

    );
};