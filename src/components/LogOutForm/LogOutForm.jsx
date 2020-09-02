import React from 'react';
import '../LogForm/LogForm.css';
import './LogOutForm.css';
import firebase from "../../services/firebase";

const LogOutForm= ({ handleLogOutClick, user, imgUrl}) => {
    let  isLoginOut;
    const handleLoginOut = () =>{
        firebase.auth().signOut().then(() => {
            console.log('user is logged out');
            }, function (error) {
            console.log(error);
        });
    }
 return (
    <form>
        <div className="sub_title">Вы авторизованы как: </div>
        <div className="googleUser">
            <div className="userForm">{user}</div>
            <div className="emailForm"></div>
            <div className="avatarForm">
                <img className='logo_img round' src={imgUrl}/>
            </div>
        </div>
        <div className="divButton">
        <button className="signout_button" onClick={(e) => {e.preventDefault(); handleLoginOut(); handleLogOutClick(isLoginOut = true);}}>ВЫХОД</button>
        </div>
    </form>
 )
}
export default LogOutForm;
