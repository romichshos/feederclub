import React from 'react';
import './About.css';

const About = () => (
    <main className="content">
        {/* <div className="content_wrap wrap">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>
                <div className="context_about"></div>
                <div className="context_text"><span className="span_text">Клуб любителей фидерной ловли на некоммерческой основе приглашает присоединиться всех желающих. Предложения и вопросы направляйте на почту.</span>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>*/}
        <div className="container_card">
            <div className="card">
                <div className="face face1">
                    <div className="content_card">
                        <img src="http://localhost:3000/fish.png"/>
                        <h3>Рыбачь</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content_card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                        <a href="#">Читать дальше</a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content_card">
                        <img src="http://localhost:3000/computer.png"/>
                        <h3>Учись</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content_card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                        <a href="#">Читать дальше</a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content_card">
                        <img src="http://localhost:3000/cup.png"/>
                        <h3>Соревнуйся</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content_card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                        <a href="#">Читать дальше</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
)

export default About