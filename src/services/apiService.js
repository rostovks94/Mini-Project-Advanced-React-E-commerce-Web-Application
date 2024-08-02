import axios from "axios";

const API_URL = 'https://fakestoreapi.com';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Registration failed');
    }
};

export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, loginData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Login failed');
    }
};

export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(`${API_URL}/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Update failed');
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Delete failed');
    }
};