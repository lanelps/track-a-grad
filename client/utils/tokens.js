export const clearToken = () => localStorage.removeItem('ACCESS-TOKEN', null)

export const getToken = () => localStorage.getItem('ACCESS-TOKEN')

export const setToken = token => localStorage.setItem('ACCESS-TOKEN', token)
