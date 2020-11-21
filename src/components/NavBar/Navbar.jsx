import React from 'react';
import {Link} from 'react-scroll';
import './Navbar.css';



const Menu =({onClickLogOut, onClickRegister, onClickLogIn, user})=> (
    <div className="header_menu">
        <nav className="menu_list">
            <div>
                <Link to="Contacts" spy={true} smooth={true} offset={-70} duration={2500}
                      className="menu_item">Контакты</Link>
            </div>
            <div>
                <Link to="MyGallery" spy={true} smooth={true} offset={-170} duration={2500} className="menu_item">Галерея</Link>
            </div>
            <div>
                <Link to="About" spy={true} smooth={true} offset={-70} duration={2500} className="menu_item">О нас</Link>
            </div>
            <div>
                <Link to="LogForm" spy={true} smooth={true} offset={-400} duration={2500} className="menu_item"
                      onClick={onClickRegister}>Регистрация</Link>
            </div>
            <div className={(user) ? "div_login" : "div_div"}>

                <Link to="LogForm" spy={true} smooth={true} offset={-400} duration={2500}
                      className={(user) ? "menu_item menu_item_login" : "menu_item"}
                      onClick={onClickLogIn}>{(user) ?
                    `Привет  ${user} !`
                    : "Войти"}
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