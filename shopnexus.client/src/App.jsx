import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product"
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
                <Route exact path="/products" element={<AllProducts />} />
                <Route exact path="/products/:productId" element={<Product />} />
                <Route exact path="/catalog" element={products != null ? <Catalog products={products} /> : <div></div>} />
                {/*default*/}
                <Route path='/*' element={<Navigate to="/" replace="true" />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;