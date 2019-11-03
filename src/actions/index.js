let nextId =0;

export const logIn = (username, psw, email, isLogged=true, isRegisterForm=false) => ({
    type: 'LOGIN',
    userId: 1,
    username: username.value,
    psw: psw.value,
    email: email.value,
    isLogin: isLogged,
    isRegisterForm: isRegisterForm
})

export const logOut =(userId, email, login) =>({
    type: 'LOGOUT',
    id: userId,
    email: email,
    login: login
})

export const register =(userId, email, login, psw) =>({
    type: 'REGISTER',
    psw: psw,
    email: email,
    login: login
})