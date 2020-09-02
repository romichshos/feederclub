import axios from 'axios';
import firebase from "../services/firebase";
let nextId =0;

export const logIn = (user, email, imgUrl) => ({
    type: 'LOGIN',
    user: user,
    email: email,
    imgUrl: imgUrl,
    isLogged: true
})

export const logOut =() =>({
    type: 'LOGOUT',
    user: null,
    email: null,
    imgUrl: null,
    isLogged: false
})

export const loginGoogle = (user, email, imgUrl)=>{
    return dispatch =>{
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(function() {
            return firebase.auth().signInWithPopup(provider).then(function(result) {
            user = result.user.displayName;
            email = result.user.email;
            imgUrl =result.user.photoURL;
            dispatch(logIn(user, email, imgUrl));
            dispatch(registerDB(user, email));
        })}).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
        });
    }
}


export const registerDB =(user, email)=> {
    return dispatch => {
        dispatch(registerInfo());
        axios
            .post('//localhost:3002/users', {
                user: user,
                email: email
            })
            .then(res => {
                console.log('RESP');
                console.log(res);
                console.log('RESP');
                dispatch(addUserSuccess(res.data));
            })
            .catch(err => {
                console.log(err.message);
                dispatch(addUserFailure(err.message));
            });
    };
}

export const registerInfo =(user, psw, email) =>({
    type: 'REGISTER',
    user: user,
    email: email
})

export const loginClick = ()=>({
    type: 'LOGIN_FORM_CALL',
    isRegisterForm: false
})

export const registerClick = ()=>({
    type: 'REGISTER_FORM_CALL',
    isRegisterForm: true
})

export const addUserSuccess = () => ({
    type: 'ADD_USER_SUCCESS',
    isRegistered: true,
    isRegisterForm: false
   });

export const addUserFailure = () => ({
    type: 'ADD_USER_FAILURE',
    isRegistered: false
});