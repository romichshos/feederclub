import React from 'react';
import './RegForm.css';

const RegForm = () => (
    <div className="pass_container">
    <div className="login_div">
        <div className="logo_form"></div>
        <div className="title">ШФК</div>
        <div className="sub_title">Бета</div>
        <div className="fields">
            <div className="username"><input type='username' className='user-input' placeholder='Username'></input></div>
            <div className="password"><input type='password' className='pass-input' placeholder='Password'></input></div>
        </div>
        <button className="signin_button">ЛОГИН</button>
        <div className='link'><a href='#'>Забыли пароль?</a></div>
    </div>
    </div>
)

export default RegForm;