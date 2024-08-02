import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/apiService';
import SessionStorageService from '../services/SessionStorageService';
import '../css/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser({ email, password });
            console.log('Login successful:', data);

            SessionStorageService.setToken(data.token);
            SessionStorageService.setUser(data.user);

            setSuccess(true);
            setError('');
            setEmail('');
            setPassword('');

            setTimeout(() => {
                navigate('/');
            }, 2000);

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Container className="login-container">
            <h1 className="mb-3">Login</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">Login successful! Redirecting...</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3 btn-custom btn-block">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;