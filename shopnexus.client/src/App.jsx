import './css/app.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product"
import axios from 'axios'
import Home from "./pages/Home";
import AllProducts from './pages/AllProducts';


function App() {    
    const [products, setProducts] = useState(null)
    const API_URL = "https://localhost:7182/products"

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(API_URL);
                console.log(response.data);
                setProducts(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }        
        }

        fetchTasks()
    }, [])
    


    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route elxact path="/all-products" element={<AllProducts />} />
                <Route exact path="/products/:productId" element={<Product />} />
                {/*default*/}
                <Route path='/*' element={<Navigate to="/" replace="true" />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;