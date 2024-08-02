import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './views/ProductList';
import ProductDetail from './views/ProductDetail';
import Cart from './views/Cart';
import OrderHistory from './views/OrderHistory';
import AdminProductList from './views/AdminProductList';
import CreateCustomerForm from './components/CreateCustomerForm';
import CustomerList from './views/CustomerList';
import CustomerDetails from './views/CustomerDetails';
import CreateProductForm from './views/CreateProductForm';
import UpdateCustomerForm from './views/UpdateCustomerForm';
import UpdateProductForm from './views/UpdateProductForm';
import ProductStock from './views/ProductStock';
import Home from './views/Home';
import Footer from './components/Footer';
import Register from './views/Register';
import Login from './views/Login';
import UpdateUser from './views/UpdateUser';
import DeleteUser from './views/DeleteUser';
import { Toast, ToastContainer } from 'react-bootstrap';
import './App.css';
import SessionStorageService from './services/SessionStorageService';
import Checkout from './views/Checkout';

const App = () => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });
    const [customers, setCustomers] = useState(() => {
        const savedCustomers = localStorage.getItem('customers');
        return savedCustomers ? JSON.parse(savedCustomers) : [];
    });
    const [orders, setOrders] = useState(() => {
        const savedOrders = localStorage.getItem('orders');
        return savedOrders ? JSON.parse(savedOrders) : [];
    });
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem('products');
        return savedProducts ? JSON.parse(savedProducts) : [];
    });
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [productCounter, setProductCounter] = useState(() => {
        const savedCounter = localStorage.getItem('productCounter');
        return savedCounter ? parseInt(savedCounter) : (products && products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1);
    });

    useEffect(() => {
        if (!localStorage.getItem('products')) {
            fetch('/products.json')
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                    localStorage.setItem('products', JSON.stringify(data));
                })
                .catch(error => console.error('Error fetching products:', error));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('customers', JSON.stringify(customers));
    }, [customers]);

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    useEffect(() => {
        localStorage.setItem('productCounter', productCounter);
    }, [productCounter]);

    const addToCart = (product, quantity) => {
        quantity = parseInt(quantity, 10);
        setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(item => item.id === product.id);
            if (itemIndex >= 0) {
                const updatedItems = [...prevItems];
                updatedItems[itemIndex].quantity += quantity;
                return updatedItems;
            } else {
                return [...prevItems, { ...product, quantity }];
            }
        });
        setToastMessage(`${product.name} has been added to the cart.`);
        setShowToast(true);
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const updateCustomer = (updatedCustomer) => {
        setCustomers(prevCustomers => {
            return prevCustomers.map(customer =>
                customer.id === updatedCustomer.id ? updatedCustomer : customer
            );
        });
    };

    const placeOrder = (newOrder) => {
        setOrders(prevOrders => [...prevOrders, newOrder]);
    };

    const updateProduct = (updatedProduct) => {
        setProducts(prevProducts => {
            return prevProducts.map(product =>
                product.id === updatedProduct.id ? updatedProduct : product
            );
        });
    };

    const addCustomer = (newCustomer) => {
        setCustomers(prevCustomers => [...prevCustomers, newCustomer]);
    };

    const addProduct = (newProduct) => {
        setProducts(prevProducts => [...prevProducts, newProduct]);
        setProductCounter(prevCounter => prevCounter + 1);
    };

    const cancelOrder = (id) => {
        setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
    };

    const updateStockLevel = (id, newStock) => {
        setProducts(prevProducts => {
            return prevProducts.map(product =>
                product.id === id ? { ...product, stock: newStock } : product
            );
        });
    };

    const deleteProduct = (id) => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    };

    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/products" element={<ProductList products={products} addToCart={addToCart} />} />
                        <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} />} />
                        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} placeOrder={placeOrder} />} />
                        <Route path="/order-history" element={<OrderHistory orders={orders} cancelOrder={cancelOrder} />} />
                        <Route path="/admin-products" element={<AdminProductList products={products} deleteProduct={deleteProduct} />} />
                        <Route path="/create-customer" element={<CreateCustomerForm addCustomer={addCustomer} />} />
                        <Route path="/customer-list" element={<CustomerList customers={customers} />} />
                        <Route path="/customer/:id" element={<CustomerDetails customers={customers} />} />
                        <Route path="/create-product" element={<CreateProductForm addProduct={addProduct} productCounter={productCounter} setProductCounter={setProductCounter} />} />
                        <Route path="/update-customer/:id" element={<UpdateCustomerForm customers={customers} updateCustomer={updateCustomer} />} />
                        <Route path="/update-product/:id" element={<UpdateProductForm products={products} updateProduct={updateProduct} />} />
                        <Route path="/product-stock" element={<ProductStock products={products} updateStockLevel={updateStockLevel} />} />
                        <Route path="/" exact element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/update-user" element={<UpdateUser user={SessionStorageService.getUser()} updateUser={updateCustomer} />} />
                        <Route path="/delete-user" element={<DeleteUser />} />
                        <Route path="/checkout" element={<Checkout cartItems={cartItems} placeOrder={placeOrder} clearCart={() => setCartItems([])} />} />
                    </Routes>
                </main>
                <Footer />
            </div>
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </Router>
    );
};

export default App;