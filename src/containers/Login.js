import {connect} from 'react-redux';
import LogForm from '../components/LogForm/LogForm.jsx';
import {logIn, logOut, register} from '../actions';
import firebase from "../services/firebase";


const mapStateToProps = (state) => ({
 /*   username: state.username,
    psw: state.psw,
    email: state.email,*/
    imgUrl: state.loginForm.imgUrl,
    isLoginOut: state.loginForm.isLoginOut,
    user: state.loginForm.user,
    isLogged: state.loginForm.isLogged,
    isRegisterForm: state.loginForm.isRegisterForm
})


const mapDispatchToProps = (dispatch) => ({
        handleLogInClick(user, email, imgUrl, isLogOut) {
            console.log(typeof user);
           if (!isLogOut) {
                   let provider = new firebase.auth.GoogleAuthProvider();
                   firebase.auth().signInWithPopup(provider).then(function(result) {
                       user = result.user.displayName;
                       email = result.user.email;
                       imgUrl =result.user.photoURL;
                       console.log(user);
                       dispatch(logIn(user, email, imgUrl, isLogOut));
                   }).catch(function(error) {
                       const errorCode = error.code;
                       const errorMessage = error.message;
                       const email = error.email;
                       const credential = error.credential;
                   });
               }
            },
        handleLogOutClick(isLogOut) {
            if (isLogOut)
            {dispatch(logOut(isLogOut))
            }
           }
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(LogForm);
