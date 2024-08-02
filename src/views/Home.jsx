import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="home-container p-5 mb-4 rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Welcome to Smart Shopping!</h1>
                <p className="col-md-8 fs-4">Your one-stop shop for all your needs.</p>
            </div>
        </Container>
    );
};

export default Home;