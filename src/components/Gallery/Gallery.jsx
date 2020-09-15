import React from 'react';
import {Element} from 'react-scroll';
import './Gallery.css';
import 'swiper/swiper-bundle.css';
import Navigation from "../Slider/Slider";
import Swiper from "../Slider/Swiper.jsx";




/*const MyGallery = ({user, isLogged}) => {
    if (user) {
        return (
            <div className="gallery_container">
                <Element name='MyGallery'/>
                <div className="container">
                    <h1 className="title">Our Gallery</h1>
                    <div className="slider">
                        <Navigation/>
                    </div>
                </div>
            </div>

        )
    }
    else
        return (<div></div>)
}*/


const MyGallery = ({user, isLogged}) => {
    if (user) {
        return (
            <div className="gallery_container">
                <Element name='MyGallery'/>
                 <Swiper/>
            </div>

        )
    }
    else
        return (<div></div>)
}

export default MyGallery