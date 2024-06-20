import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product"
import Category from "./pages/Category"
import axios from 'axios'
import Home from "./pages/Home";
import './css/app.css';
import Catalog from "./pages/Catalog"
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path="/products/:productId" element={<Product />} />
                <Route exact path="/categories/:categoryId" element={<Category />} />
                <Route exact path="/catalog" element={<Catalog />} />
                {/*default*/}
                <Route path='/*' element={<Navigate to="/" replace="true" />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;