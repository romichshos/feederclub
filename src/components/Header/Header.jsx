import React from 'react';
import Menu from '../NavBar/Menu';
import PropTypes from 'prop-types';
import './Header.css';

const Header = () => (
    <header className="header">
        <div className="header_wrap wrap">
            <div className="header_top">
                <div className="header_logo logo">
                    <a className="logo_link" href="/fc_logo.svg">
                    </a>
                </div>
                <div className="header_title">
                    <h3>Шосткинский</h3>
                    <h3>Фидерный</h3>
                    <h3>Клуб</h3>
                </div>
                <Menu/>
            </div>
        </div>
    </header>
)

export default Header