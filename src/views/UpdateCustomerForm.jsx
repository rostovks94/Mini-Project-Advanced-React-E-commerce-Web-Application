import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../css/UpdateCustomerForm.css';

const UpdateCustomerForm = ({ customers, updateCustomer }) => {
    const { id } = useParams();
    const customer = customers.find(c => c.id === parseInt(id));
    const [name, setName] = useState(customer ? customer.name : '');
    const [email, setEmail] = useState(customer ? customer.email : '');
    const [phone, setPhone] = useState(customer ? customer.phone : '');
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (customer) {
            setName(customer.name);
            setEmail(customer.email);
            setPhone(customer.phone);
        }
    }, [customer]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedCustomer = {
            id: parseInt(id),
            name,
            email,
            phone
        };
        updateCustomer(updatedCustomer);

        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    if (!customer) {
        return <p>Customer not found</p>;
    }

    return (
        <Container>
            <h1>Update Customer</h1>
            {showAlert && <Alert variant="success">Customer has been updated successfully!</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter customer name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter customer email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter customer phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Update Customer
                </Button>
            </Form>
        </Container>
    );
};

export default UpdateCustomerForm;