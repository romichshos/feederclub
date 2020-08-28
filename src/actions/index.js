import axios from 'axios';
let nextId =0;

export const logIn = (user, email, imgUrl, isLogOut) => ({
    type: 'LOGIN',
    //userId: nextId++,
    user: user,
   //psw: psw.value,
    email: email,
    imgUrl: imgUrl,
    isLogOut: isLogOut
    //isRegisterForm: isRegisterForm.value
})

export const logOut =(isLogOut) =>({
    type: 'LOGOUT',
  //  userId: null,
    user: null,
  //  psw: null,
    email: null,
    imgUrl: null,
    isLogOut: isLogOut,
    isRegisterForm: false
})

export const register =(user, email)=> {
    return dispatch => {
        dispatch(registerInfo());
        axios
            .post('//localhost:3002/users', {
                user: user,
                email: email//,
                //completed: false
                //isPresent: isPresent
            })
            .then(res => {
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
    userId: nextId++,
    username: user,
    psw: psw,
    email: email,
    isLogged: false
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