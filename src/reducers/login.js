const login = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                id: action.id,
                login: action.login
            }
        default:
            return state
    }
}

export default login