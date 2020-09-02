import React,{useEffect, useState} from 'react';
import './LogForm.css';
import '../../svgicons.css';
import {Element} from 'react-scroll';
import firebase from '../../services/firebase';
import LogOutForm from '../LogOutForm/LogOutForm.jsx'
import LogInForm from '../LogInForm/LogInForm.jsx'

const LogForm = ({user, imgUrl, email, handleLogInClick, handleLogOutClick, isRegisterForm}) => {
     return (
        <div className="pass_container">
            <Element name='LogForm'/>
            <div className="login_div">
                <div className="logo_form"><img className="logo_img_1" src="/fishing-2.png" alt=""/></div>
                <div className="title">ШФК</div>
                {!user&&<LogInForm isRegisterForm={isRegisterForm} handleLogInClick={handleLogInClick}/>}
                {user&&<LogOutForm handleLogOutClick={handleLogOutClick} user={user} imgUrl={imgUrl}/>}
            </div>
        </div>
    )
}

export default LogForm;