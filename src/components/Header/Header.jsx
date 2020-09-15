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
                        <img className='logo_img' src='/fc_logo.png' alt='Логотип'/>
                    </a>
                </div>
                <div className="header_title">
                    <h3><span className="capital_letter">Ш</span>осткинский</h3>
                    <h3><span className="capital_letter">Ф</span>идерный</h3>
                    <h3><span className="capital_letter">К</span>луб</h3>
                </div>
                <NavBarWithLogin />
            </div>
            <div className="header_info">
                <h1 className="main_title">
                    Рыбачь, учись, соревнуйся
                </h1>
                <p className="header_text">
                    <a className="header_link" href="#"  onClick={()=>scroller.scrollTo('LogForm',{spy:true, smooth:true, offset:-350, duration:3000})}
                    >регистрация</a>
                </p>
            </div>
            <div className="logo_div">
                    <div className="logo_div_3">
                        <img className='img_feed' src='/Logo_moving_v2.png' alt=''/>
                    </div>
           </div>
        </div>
        <div className="btn_arrow">
            <div className="arrow-7" onClick={()=>scroller.scrollTo('About',{spy:true, smooth:true, offset:-70, duration:3000})}>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
)

export default Header