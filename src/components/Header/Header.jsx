import React from 'react';
import NavBarWithLogin from '../../containers/NavBarWithLogin';
import PropTypes from 'prop-types';
import {Element} from 'react-scroll';
import './Header.css';
import {scroller} from "react-scroll/modules/index";

const Header = () => (
    <header className="header">
        <Element name ='Header'/>
        <div className="header_wrap wrap">
            <div className="header_top">
                <div className="header_logo logo">
                    <a className="logo_link" href='#'>
                        <img className='logo_img' src='/logo-4.webp' alt='Логотип'/>
                    </a>
                </div>
                <div className="header_title">
                </div>
                <NavBarWithLogin />
            </div>
            <div className="header_info">
                <h1 className="main_title">
                    КЛУБ ЛЮБИТЕЛЕЙ</h1>
                <h1 className="main_title">
                    ФИДЕРНОЙ ЛОВЛИ
                </h1>
            </div>
        </div>
    </header>
)

export default Header