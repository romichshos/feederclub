import React from 'react';
import Menu from '../NavBar/Menu';
import PropTypes from 'prop-types';

const Header =()=>(
       <header className="header">
         <div className="header-logo">
             <a href="/fc_logo.svg">
             </a>
         </div>
         <div className="header-title">
           <h1>Шосткинский фидерный клуб</h1>
         </div>
        <Menu />
        </header>
    )

export default Header