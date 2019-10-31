const loginForm = (state = {}, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                userId: action.userId,
                login:  action.login,
                email:  action.email,
                isLogedIn: action.isLogedIn,
                isRegisterForm: action.isRegisterForm
            }
         default:
            return state
    }
}

export default loginForm