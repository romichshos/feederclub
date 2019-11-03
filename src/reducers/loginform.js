const loginForm = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
            userId: action.userId,
            username:  action.username,
            email:  action.email,
            psw: action.psw,
            isLogged: action.isLogged,
            isRegisterForm: action.isRegisterForm
        }
        case 'LOGOUT':
            return {
                userId: action.userId,
                login: action.username,
                email: action.email
            }
        default:
            return state
    }
}

export default loginForm