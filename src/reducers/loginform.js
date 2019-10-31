const loginForm = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
            userId: action.userId,
            psw: action.psw,
            login:  action.login,
            email:  action.email,
            isLogedIn: action.isLogedIn,
            isRegisterForm: action.isRegisterForm
        }
        case 'LOGOUT':
            return {
                userId: action.userId,
                login: action.login,
                email: action.email
            }
        default:
            return state
    }
}

export default loginForm