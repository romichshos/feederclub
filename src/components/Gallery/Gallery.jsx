import React from 'react';
import {Element} from 'react-scroll';
import './Gallery.css';
import 'swiper/swiper-bundle.css';
import Swiper from "../Slider/Swiper.jsx";

const MyGallery = ({user, dataImg}) => {
    if (user) {
        return (
            <div className="gallery_container">
            <div className="galleryTitle" >НАША ГАЛЛЕРЕЯ</div>
                <Element name='MyGallery'/>
                 <Swiper urlArray={dataImg}/>
            </div>

        )
    }
    else
        return (<div></div>)
}

export default MyGallery