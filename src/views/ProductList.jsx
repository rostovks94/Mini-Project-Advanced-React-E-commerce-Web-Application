import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/ProductList.css';

const ProductList = ({ products, addToCart }) => {
    const [selectedQuantities, setSelectedQuantities] = useState({});

    const handleQuantityChange = (productId, quantity) => {
        setSelectedQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: quantity
        }));
    };

    if (!products || products.length === 0) {
        return <p>No products available</p>;
    }

    return (
        <div className="container">
            <div className="card-container">
                {products.map(product => (
                    <Card key={product.id} className="product-card">
                        <Card.Img variant="top" src={product.image} className="product-image" />
                        <Card.Body className="card-body">
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>${product.price.toFixed(2)}</Card.Text>
                            <Form.Control as="select" defaultValue={1} onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}>
                                {[...Array(20).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))}
                            </Form.Control>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <Button as={Link} to={`/product/${product.id}`} className="btn-custom">View Details</Button>
                            <Button className="btn-custom" onClick={() => addToCart(product, selectedQuantities[product.id] || 1)}>Add to Cart</Button>
                        </Card.Footer>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ProductList;