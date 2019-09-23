import React from 'react';
import { Link  } from 'react-router-dom';

const Menu =()=>(
    <div>
        <nav className="nav">
          <a href="/MainPage/MainPage" className="nav-item">Главная</a> |
          <a href="/Contacts/Contacts" className="nav-item">Контакты</a> |
          <a href="/MyGallery/MyGallery" className="nav-item">Галерея</a> |
          <a href="/About/About" className="nav-item">О нас</a>
        </nav>
    </div>
)

export default Menu