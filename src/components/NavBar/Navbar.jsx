import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Menu =()=>(
    <div className="header_menu">
        <nav className="menu_list">
          <div>
            <NavLink to="/Contacts" className="menu_item">Контакты</NavLink>
          </div>
          <div>
            <NavLink to="/MyGallery" className="menu_item">Галерея</NavLink>
          </div>
          <div>
            <NavLink to="/About" className="menu_item">О нас</NavLink>
          </div>
            <div>
                <NavLink to="/LogForm" className="menu_item">Регистрация</NavLink>
            </div>
            <div>
              <NavLink to="/" className="menu_item">Войти</NavLink>
            </div>
        </nav>
     </div>
)

export default Menu