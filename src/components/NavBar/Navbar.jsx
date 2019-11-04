import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import './Navbar.css';



const Menu =({username, onClickLogOut})=>(
    <div className="header_menu">
        <nav className="menu_list">
          <div>
            <Link to="Contacts" spy={true} smooth={true} offset={-70} duration={3000}  className="menu_item">Контакты</Link>
          </div>
          <div>
            <Link to="/MyGallery" className="menu_item">Галерея</Link>
          </div>
          <div>
            <Link to="About" spy={true} smooth={true} offset={-70} duration={3000} className="menu_item">О нас</Link>
          </div>
          <div>
                <Link to="/LogForm" className="menu_item">Регистрация</Link>
           </div>
          <div className={(username) ? "div_login": "div_div"}>

                <Link to="/" className={(username) ? "menu_item menu_item_login": "menu_item"}>{(username)?
                      "Привет  "+username+" !"
                           : "Войти" }
                </Link>

                <ul className="sub_menu">
                        <li><a href="#">Профиль</a></li>
                        <li><a href="#">Моя переписка</a></li>
                        <li><a href="#" onClick={onClickLogOut}>Выйти</a></li>
                </ul>

           </div>
        </nav>
     </div>
)

export default Menu