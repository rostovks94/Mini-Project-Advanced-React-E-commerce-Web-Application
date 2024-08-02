import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Smart Shopping</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/products">
                                <Nav.Link><i className="fas fa-th-list"></i> Products</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/order-history">
                                <Nav.Link><i className="fas fa-history"></i> Order History</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/admin-products">
                                <Nav.Link><i className="fas fa-cogs"></i> Admin</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/create-customer">
                                <Nav.Link><i className="fas fa-user"></i> Create Customer</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/customer-list">
                                <Nav.Link><i className="fas fa-users"></i> Customer List</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/create-product">
                                <Nav.Link><i className="fas fa-plus"></i> Create Product</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/product-stock">
                                <Nav.Link><i className="fas fa-boxes"></i> Update Stock</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/register">
                                <Nav.Link>Register</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;