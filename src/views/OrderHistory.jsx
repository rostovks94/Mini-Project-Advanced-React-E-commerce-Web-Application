import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';

const OrderHistory = ({ orders, cancelOrder }) => {
    const calculateOrderTotal = (order) => {
        const itemTotal = order.items.reduce((total, item) => total + item.price * item.quantity, 0);
        const shippingHandling = 5.99;
        const taxCollected = 2.00;
        return (itemTotal + shippingHandling + taxCollected).toFixed(2);
    };

    return (
        <Container>
            <h1>Order History</h1>
            {orders.length === 0 ? (
                <p>You have no orders</p>
            ) : (
                orders.map(order => (
                    <ListGroup key={order.id} className="mb-4 order-item">
                        <ListGroup.Item>
                            <p><strong>Order ID:</strong> {order.id}</p>
                            <p><strong>Name:</strong> {order.name}</p>
                            <p><strong>Email:</strong> {order.email}</p>
                            <p><strong>Address:</strong> {order.address}</p>
                            <p><strong>Phone:</strong> {order.phone}</p>
                            <p><strong>Status:</strong> {order.status}</p>
                            <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
                            <p><strong>Items:</strong></p>
                            <ListGroup>
                                {order.items.map(item => (
                                    <ListGroup.Item key={item.id}>
                                        {item.name} - ${item.price} x {item.quantity}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                            <p><strong>Shipping & Handling:</strong> $5.99</p>
                            <p><strong>Total Before Tax:</strong> ${order.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
                            <p><strong>Estimated Tax Collected:</strong> $2.00</p>
                            <p><strong>Order Total:</strong> ${calculateOrderTotal(order)}</p>
                            <Button className="btn-custom" onClick={() => cancelOrder(order.id)}>Cancel Order</Button>
                        </ListGroup.Item>
                    </ListGroup>
                ))
            )}
        </Container>
    );
};

export default OrderHistory;