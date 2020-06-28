import React from 'react';
import './About.css';
import {Element, scroller} from 'react-scroll';


const About = () => (
    <div className="wrap_about">
        <div className="content">
            <div className="container_card">
                <Element name ='About'/>
                <div className="card">
                    <div className="face face1">
                        <div className="content_card">
                            <img src="/fish.png"/>
                            <h3>Рыбачь</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content_card">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua.</p>
                            <a href="#">Читать дальше</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content_card">
                            <img src="/computer.png"/>
                            <h3>Учись</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content_card">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua.</p>
                            <a href="#">Читать дальше</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content_card">
                            <img src="/cup.png"/>
                            <h3>Соревнуйся</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content_card">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua.</p>
                            <a href="#">Читать дальше</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="btn_arrow">
            <div className="arrow-7" onClick={()=>scroller.scrollTo('Contacts',{spy:true, smooth:true, offset:-70, duration:3000})}>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
)

export default About