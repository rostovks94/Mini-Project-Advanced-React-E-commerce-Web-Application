import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../css/UpdateProductForm.css'; 

const UpdateProductForm = ({ products, updateProduct }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [name, setName] = useState(product ? product.name : '');
    const [price, setPrice] = useState(product ? product.price : '');
    const [image, setImage] = useState(product ? product.image : '');
    const [description, setDescription] = useState(product ? product.description : '');
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (product) {
            setName(product.name);
            setPrice(product.price);
            setImage(product.image);
            setDescription(product.description);
        }
    }, [product]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedProduct = {
            id: parseInt(id),
            name,
            price: parseFloat(price),
            image,
            description
        };
        updateProduct(updatedProduct);

        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <Container>
            <h1>Update Product</h1>
            {showAlert && <Alert variant="success">Product has been updated successfully!</Alert>}
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

                <Button variant="primary" type="submit" className="mt-3">
                    Update Product
                </Button>
            </Form>
        </Container>
    );
};

export default UpdateProductForm;