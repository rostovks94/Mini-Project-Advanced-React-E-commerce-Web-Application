import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import ConfirmModal from '../components/ConfirmModal';

const CreateCustomerForm = ({ addCustomer }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowConfirm(true);
    };

    const handleConfirm = () => {
        const newCustomer = {
            id: Date.now(),
            name,
            email,
            phone
        };
        addCustomer(newCustomer);

        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);

        setName('');
        setEmail('');
        setPhone('');
        setShowConfirm(false);
    };

    const handleClose = () => setShowConfirm(false);

    return (
        <Container>
            <h1>Create Customer</h1>
            {showAlert && <Alert variant="success">Customer has been created successfully!</Alert>}
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

                <Button variant="primary" type="submit" className="mt-3 btn-block">
                    Create Customer
                </Button>
            </Form>
            <ConfirmModal
                show={showConfirm}
                handleClose={handleClose}
                handleConfirm={handleConfirm}
                title="Confirm Customer Creation"
                message="Are you sure you want to create this customer?"
            />
        </Container>
    );
};

export default CreateCustomerForm;