// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(sessionStorage.getItem('user')) || null,
    token: sessionStorage.getItem('token') || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            sessionStorage.setItem('user', JSON.stringify(state.user));
            sessionStorage.setItem('token', state.token);
        },
        clearUser: (state) => {
            state.user = null;
            state.token = null;
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('token');
        },
    },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;