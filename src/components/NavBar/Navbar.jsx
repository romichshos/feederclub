import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Menu =()=>(
    <div className="header_menu">
        <nav className="menu_list">
          <div>
            <NavLink to="/" className="menu_item">Главная</NavLink>
          </div>
          <div>
            <NavLink to="/Contacts" className="menu_item">Контакты</NavLink>
          </div>
          <div>
            <NavLink to="/MyGallery" className="menu_item">Галерея</NavLink>
          </div>
          <div>
            <NavLink to="/About" className="menu_item">О нас</NavLink>
          </div>
        </nav>
    </div>
)

export default Menu