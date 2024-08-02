import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const CreateProductForm = ({ addProduct, productCounter, setProductCounter }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newProduct = {
            id: productCounter,  
            name,
            price: parseFloat(price),
            image,
            description
        };
        addProduct(newProduct);
        setProductCounter(prevCounter => prevCounter + 1);

        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);

        setName('');
        setPrice('');
        setImage('');
        setDescription('');
    };

    return (
        <Container>
            <h1>Create Product</h1>
            {showAlert && <Alert variant="success">Product has been created successfully!</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter product name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        step="0.01"
                        placeholder="Enter product price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formImage">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter product description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 btn-block">
                    Create Product
                </Button>
            </Form>
        </Container>
    );
};

export default CreateProductForm;