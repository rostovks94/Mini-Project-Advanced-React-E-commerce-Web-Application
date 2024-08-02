import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CustomerDetails = ({ customers }) => {
    const { id } = useParams();
    const customer = customers.find(c => c.id === parseInt(id));

    if (!customer) {
        return <p>Customer not found</p>;
    }

    return (
        <Container className="mt-3">
            <h1>Customer Details</h1>
            <ListGroup>
                <ListGroup.Item><strong>Name:</strong> {customer.name}</ListGroup.Item>
                <ListGroup.Item><strong>Email:</strong> {customer.email}</ListGroup.Item>
                <ListGroup.Item><strong>Phone:</strong> {customer.phone}</ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default CustomerDetails;