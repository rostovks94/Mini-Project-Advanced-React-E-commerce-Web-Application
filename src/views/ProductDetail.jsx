import React, { useState, useEffect } from 'react';
import { Container, Image, Button, ListGroup, Row, Col, Form, Toast } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../css/ProductDetail.css';

const ProductDetail = ({ products, addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
    }, [id, products]);

    if (!product) {
        return <p>Product not found</p>;
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setToastMessage(`${product.name} has been added to the cart.`);
        setShowToast(true);
    };

    return (
        <Container className="product-detail-container">
            <Row>
                <Col md={6}>
                    <Image src={product.image} fluid className="product-image" />
                </Col>
                <Col md={6}>
                    <h1>{product.name}</h1>
                    <ListGroup className="mt-3">
                        <ListGroup.Item><strong>Price:</strong> ${product.price}</ListGroup.Item>
                        <ListGroup.Item><strong>Description:</strong> {product.description}</ListGroup.Item>
                    </ListGroup>
                    <Form.Group className="mt-3">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                        />
                    </Form.Group>
                    <Button variant="success" className="mt-3" onClick={handleAddToCart}>Add to Cart</Button>
                </Col>
            </Row>
            <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>
        </Container>
    );
};

export default ProductDetail;