# Advanced React E-commerce Web Application


## Overview

This is an advanced e-commerce web application built with **React**, **Redux Toolkit**, **React Query**, and styled using **Bootstrap**. The project simulates an online shopping experience using the [FakeStoreAPI](https://fakestoreapi.com/) for product data, user authentication, and CRUD operations on products, carts, and users.

This project was completed as part of an assignment for **Coding Temple Bootcamp**. It demonstrates advanced concepts in **React** development, including state management with **Redux Toolkit**, data fetching with **React Query**, and asynchronous operations using the FakeStoreAPI.

Users can:
- Register and log in to their accounts
- Browse products, view product details, and add them to their shopping cart
- Manage their cart by updating the quantity of products and removing them
- Search for products and browse by category
- Simulate the checkout process

## Features

- **User Authentication (CRUD)**: Users can register, log in, update their profile, and delete their account.
- **Product Catalog**: Displays all available products with details such as title, price, category, description, and image.
- **Shopping Cart**: Add products to the cart, update quantities, remove items, and calculate the total price.
- **Search & Category Filter**: Search for products by title or price and filter by product category.
- **Checkout**: Simulates a checkout process by clearing the cart and session storage.
- **State Management**: Redux Toolkit is used to manage cart state, and session storage is used for persistence across sessions.

## Project Structure
```bash
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   ├── ConfirmModal.jsx
│   │   ├── CreateCustomerForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   ├── css
│   │   ├── Cart.css
│   │   ├── CustomerList.css
│   │   ├── DeleteUser.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── Login.css
│   │   ├── OrderForm.css
│   │   ├── OrderHistory.css
│   │   ├── ProductDetail.css
│   │   ├── ProductList.css
│   │   ├── ProductStock.css
│   │   ├── Register.css
│   │   ├── UpdateCustomerForm.css
│   │   ├── UpdateProductForm.css
│   │   └── UpdateUser.css
│   ├── views
│   │   ├── AdminProductList.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── CreateProductForm.jsx
│   │   ├── CustomerDetails.jsx
│   │   ├── CustomerForm.jsx
│   │   ├── CustomerList.jsx
│   │   ├── DeleteUser.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── OrderForm.jsx
│   │   ├── OrderHistory.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductStock.jsx
│   │   ├── Register.jsx
│   │   ├── UpdateCustomerForm.jsx
│   │   ├── UpdateProductForm.jsx
│   │   └── UpdateUser.jsx
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── redux
├── services
├── store
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
## Tech Stack
**Frontend**: React, TypeScript, Redux Toolkit, Bootstrap
**State Management**: Redux Toolkit
**Data Fetching**: React Query
**Backend API**: FakeStoreAPI
**Authentication**: Auth0

## Installation and Setup
To run this project locally, follow the steps below:

1. **Clone the repository**:
```bash
  git clone https://github.com/your-username/advanced-react-ecommerce.git
  cd advanced-react-ecommerce
```

2. **Install dependencies**:
```bash
npm install
````

3. **Start the development server**:
```bash
   npm run dev
```
By default, the app will be available at http://localhost:5173.

4. **Building for production**:
To create a production build, run:
```bash
  npm run build
```

5. **Running the production build**:
To preview the production build, run:
```bash
  npm run preview
```

## Features in Detail
### User CRUD
**Create**: Allows users to register by providing their username, email, and password.
**Login**: Enables users to log in with their username or email and password.
**Update**: Lets users update their account details.
**Delete**: Users can permanently delete their account.
### Product Catalog
**Browse Products**: Displays a list of products fetched from FakeStoreAPI.
**Product Details**: Users can view detailed information about each product.
**Search and Filter**: Allows users to search products by title or price and filter by category.
### Shopping Cart
**Add to Cart**: Users can add products to the cart from the product listing.
**Manage Cart**: Users can update the quantity or remove items from the cart.
**Checkout**: Simulates a checkout process.
### State Management with Redux
**Redux Toolkit** is used for state management, and it ensures that the shopping cart data persists across sessions using session storage.
### Performance Optimization
**Session Storage**: Utilized to cache authentication tokens and shopping cart data.
**Code Splitting**: Implemented for performance improvements in production builds.
**Lazy Loading**: Components are lazy-loaded to optimize the application performance.
**Caching**: Frequently accessed data is cached to minimize repeated requests.

## Conclusion
This project demonstrates the application of advanced React concepts, such as Redux Toolkit, React Query, and performance optimization techniques, in the context of an e-commerce web application. By completing this project, I have deepened my understanding of building scalable, performant web applications with modern JavaScript technologies.

Feel free to reach out if you have any questions or suggestions.

