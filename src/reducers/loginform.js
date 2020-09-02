const loginForm = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
            userId: action.userId,
            user:  action.user,
            email:  action.email,
            imgUrl: action.imgUrl,
            isLogged: action.isLogged
        }
        case 'LOGOUT':
            return {
                userId: action.userId,
                user:  action.user,
                email:  action.email,
                imgUrl: action.imgUrl,
                isLogged: action.isLogged
            }
        case 'LOGIN_FORM_CALL':
        return {
            ...state,
            isRegisterForm: action.isRegisterForm
        }
        case 'REGISTER_FORM_CALL':
            return {
                ...state,
                isRegisterForm: action.isRegisterForm
            }
        default:
            return state
    }
}

export default loginForm