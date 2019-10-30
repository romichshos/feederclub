let nextId =0;
export const login = () => ({
    type: 'LOGIN',
    id: nextId++,
    login: 'Unknown'
})

export const logout =(id) =>({
    type: 'LOGOUT',
    id: id,
    login: 'Unknown'
})
