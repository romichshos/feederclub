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
                    <h3>Шосткинский</h3>
                    <h3>Фидерный</h3>
                    <h3>Клуб</h3>
                </div>
                <Menu/>
            </div>
            <div className="header_info">
                <h1 className="main_title">
                 Рыбачь, учись, соревнуйся
                </h1>
            </div>
            {/*<a className="btn_arrow" href='#content'>
                <img className='arrow_img' src='http://localhost:3000/arrow_down_5.png' alt='Перейти ниже'/>
            </a>*/}
            <a className="a_down" href='#content'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <button className="btn_down">Перейти ниже</button>
            </a>
        </div>
    </header>
)

export default Header