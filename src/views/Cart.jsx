import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, placeOrder }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const navigate = useNavigate();

    const handleCheckout = () => {
        const newOrder = {
            id: Date.now(),
            items: cartItems,
            total: totalPrice,
            date: new Date().toLocaleString(),
            status: 'Pending',
        };
        placeOrder(newOrder);
        navigate('/order-history');
    };

    return (
        <Container>
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ListGroup>
                    {cartItems.map(item => (
                        <ListGroup.Item key={item.id} className="mb-2">
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <div>
                                    <h5>{item.name}</h5>
                                    <p>${item.price} x {item.quantity}</p>
                                </div>
                                <Button className="btn-custom" onClick={() => removeFromCart(item.id)}>Remove</Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
            <h3 className="mt-4">Total: ${totalPrice.toFixed(2)}</h3>
            {cartItems.length > 0 && (
                <Button className="btn-custom mt-3" onClick={handleCheckout}>Proceed to Checkout</Button>
            )}
        </Container>
    );
};

export default Cart;