import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminProductList = ({ products, deleteProduct }) => {
    if (!products || products.length === 0) {
        return <p>No products available</p>;
    }

    return (
        <Container>
            <h1>Admin Product List</h1>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>${product.price.toFixed(2)}</td>
                                <td>
                                    <Button as={Link} to={`/update-product/${product.id}`} variant="warning" className="mr-2 mb-2">
                                        Edit
                                    </Button>
                                    <Button variant="danger" className="mb-2" onClick={() => deleteProduct(product.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default AdminProductList;