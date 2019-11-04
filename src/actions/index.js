let nextId =0;

export const logIn = (username, psw, email, isRegisterForm) => ({
    type: 'LOGIN',
    userId: 1,
    username: username.value,
    psw: psw.value,
    email: email.value,
    isLogged: true,
    isRegisterForm: isRegisterForm
})

export const logOut =() =>({
    type: 'LOGOUT',
    userId: null,
    username: null,
    psw: null,
    email: null,
    isLogged: false,
    isRegisterForm: false
})

export const register =(username, psw, email) =>({
    type: 'REGISTER',
    userId: 1,
    username: username,
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