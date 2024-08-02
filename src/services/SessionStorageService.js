const SessionStorageService = {
    setToken: (token) => {
        sessionStorage.setItem('token', token);
    },
    getToken: () => {
        return sessionStorage.getItem('token');
    },
    setUser: (user) => {
        sessionStorage.setItem('user', JSON.stringify(user));
    },
    getUser: () => {
        const user = sessionStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },
    clear: () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
    },
};

export default SessionStorageService;