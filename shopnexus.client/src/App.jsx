import './css/app.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product"
import axios from 'axios'
import Category from "./pages/Category"
import Home from "./pages/Home";
import AllProducts from './pages/AllProducts';


function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path="/all-products" element={<AllProducts />} />
                <Route exact path="/products/:productId" element={<Product />} />
                <Route exact path="/categories/:categoryId" element={<Category />} />

                {/*default*/}
                <Route path='/*' element={<Navigate to="/" replace="true" />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;