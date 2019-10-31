let nextId =0;

export const logIn = (login, psw, userId, email, isLogedIn, isRegisterForm) => ({
    type: 'LOGIN',
    id: userId,
    psw: psw,
    email: email,
    login: login,
    isLogin: isLogedIn,
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