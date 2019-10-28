import React from 'react';
import Menu from '../NavBar/Navbar';
import PropTypes from 'prop-types';
import './Header.css';

const Header = () => (
    <header className="header">
        <div className="header_wrap wrap">
            <div className="header_top">
                <div className="header_logo logo">
                    <a className="logo_link" href='#'>
                        <img className='logo_img' src='http://localhost:3000/fc_logo.png' alt='Логотип'/>
                    </a>
                </div>
                <div className="header_title">
                    <h3><span className="capital_letter">Ш</span>осткинский</h3>
                    <h3><span className="capital_letter">Ф</span>идерный</h3>
                    <h3><span className="capital_letter">К</span>луб</h3>
                </div>
                <Menu/>
            </div>
            <div className="header_info">
                <h1 className="main_title">
                    Рыбачь, учись, соревнуйся
                </h1>
                <p className="header_text">
                    <a className="header_link" href="#">регистрация</a>
                </p>
            </div>
            <div className="logo_div">
                    <div className="logo_div_3">
                        <img className='img_feed' src='http://localhost:3000/Logo_moving.png' alt='G'/>
                    </div>
           </div>
        </div>
        <div className="btn_arrow">
            <div className="arrow-7">
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
)

export default Header