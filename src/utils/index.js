export const getToken = () => {
    return localStorage.getItem('token');
}

export const getUsername = () => {
    return localStorage.getItem('username');
}

export const getURL = () => {
    return "http://192.168.0.102:8000"
}