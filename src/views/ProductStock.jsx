import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';

const ProductStock = ({ products, updateStockLevel }) => {
    const [updatedStock, setUpdatedStock] = useState({});

    useEffect(() => {
        const lowStockThreshold = 10; 
        products.forEach(product => {
            if ((product.stock || 0) < lowStockThreshold) {
                const newStock = 20; 
                updateStockLevel(product.id, newStock);
            }
        });
    }, [products, updateStockLevel]);

    const handleStockChange = (id, newStock) => {
        setUpdatedStock((prevStock) => ({
            ...prevStock,
            [id]: newStock,
        }));
    };

    const handleUpdateStock = (id) => {
        updateStockLevel(id, updatedStock[id]);
    };

    return (
        <Container>
            <h1>Product Stock Levels</h1>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Current Stock</th>
                        <th>Update Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.stock || 0}</td>
                            <td>
                                <Form.Control
                                    type="number"
                                    value={updatedStock[product.id] || ''}
                                    onChange={(e) => handleStockChange(product.id, e.target.value)}
                                    placeholder="Enter new stock level"
                                />
                                <Button
                                    variant="primary"
                                    onClick={() => handleUpdateStock(product.id)}
                                    className="mt-2"
                                >
                                    Update Stock
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ProductStock;