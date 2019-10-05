import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Menu =()=>(
    <div className="header_menu">
        <nav className="menu_list">
          <NavLink to="/" className="menu_item">Главная</NavLink> |
          <NavLink to="/Contacts" className="menu_item">Контакты</NavLink> |
          <NavLink to="/MyGallery" className="menu_item">Галерея</NavLink> |
          <NavLink to="/About" className="menu_item">О нас</NavLink>
        </nav>
    </div>
)

export default Menu