import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu =()=>(
    <div className="menu">
        <nav className="nav">
          <NavLink to="/" className="nav-item">Главная</NavLink> |
          <NavLink to="/Contacts" className="nav-item">Контакты</NavLink> |
          <NavLink to="/MyGallery" className="nav-item">Галерея</NavLink> |
          <NavLink to="/About" className="nav-item">О нас</NavLink>
        </nav>
    </div>
)

export default Menu