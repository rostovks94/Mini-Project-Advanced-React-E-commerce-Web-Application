import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, placeOrder, clearCart }) => {
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
        clearCart();
        navigate('/order-history');
    };

    return (
        <Container>
            <h1>Checkout</h1>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            {cartItems.length > 0 && (
                <Button className="btn-custom mt-3" onClick={handleCheckout}>Confirm Purchase</Button>
            )}
        </Container>
    );
};

export default Checkout;