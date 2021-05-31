import React from 'react';
import {Link} from 'react-scroll';


const User=(props) => {
    if (!props.username) {
    return <Link to="LogForm" spy={true} smooth={true} offset={-400} duration={2500} className= "menu_item" onClick={props.onClickLogIn}>Войти
    </Link>;
}
return <Link to="" spy={true} smooth={true} offset={-400} duration={2500} className="menu_item menu_item_login">
    Привет  {props.username} !
</Link>;
}


export default User