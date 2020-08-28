import React from 'react';
import '../LogForm/LogForm.css';
import './LogOutForm.css';
import firebase from "../../services/firebase";

const LogOutForm= ({ handleLogOutClick, user, imgUrl}) => {
    console.log('image');
    console.log(imgUrl);
    console.log('USERRRRRRRRRRRRR');
    console.log(user);
    let  isLoginOut;
    const handleLoginOut = () =>{
        firebase.auth().signOut().then(() => {
            user = null;
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
                <img className='logo_img' src={imgUrl}/>
            </div>
        </div>
        <button className="signin_button" onClick={(e) => {e.preventDefault(); handleLoginOut(); handleLogOutClick(isLoginOut = true);}}>ВЫХОД</button>

    </form>
 )
}
export default LogOutForm;
