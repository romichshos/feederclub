import React from 'react';
import {Element} from 'react-scroll';
import './Gallery.css';
import 'swiper/swiper-bundle.css';
import Swiper from "../Slider/Swiper.jsx";

const MyGallery = ({user, dataImg}) => {
         return (
            <div className="gallery_container">
                <div className="galleryText">
                    <div className="galleryTitle">НАША ГАЛЛЕРЕЯ</div>
                    <div className="galleryDesc">фото и видео с наших рыбалок</div>
                </div>
                <div className="swiper_div">
                    <Element name='MyGallery'/>
                    <Swiper urlArray={dataImg}/>
                </div>
            </div>
        )
}

export default MyGallery