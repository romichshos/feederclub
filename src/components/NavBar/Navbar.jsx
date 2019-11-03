import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';



const Menu =({username})=>(
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
          <div className={(username) ? "div_login": "div_div"}>

                <NavLink to="/" className={(username) ? "menu_item menu_item_login": "menu_item"}>{(username)?
                      "Привет  "+username+" !"
                           : "Войти" }
                </NavLink>

                <ul className="sub_menu">
                        <li><a href="#">Профиль</a></li>
                        <li><a href="#">Моя переписка</a></li>
                        <li><a href="#">Выйти</a></li>
                </ul>

           </div>
        </nav>
     </div>
)

export default Menu