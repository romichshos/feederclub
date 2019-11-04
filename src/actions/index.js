let nextId =0;

export const logIn = (username, psw, email, isRegisterForm=false) => ({
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
    isLogged: false
})

export const register =(username, psw, email) =>({
    type: 'REGISTER',
    userId: 1,
    username: username,
    psw: psw,
    email: email,
    isLogged: false
})