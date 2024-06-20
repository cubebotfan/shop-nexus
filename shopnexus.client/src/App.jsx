import './css/app.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product"
import axios from 'axios'
import Home from "./pages/Home";
import Catalog from "./pages/Catalog"


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
                <Route exact path="/products/:productId" element={<Product  />} />
                <Route exact path="/catalog" element={products != null ? <Catalog products={products} /> : <div></div>} />
                {/*default*/}
                <Route path='/*' element={<Navigate to="/" replace="true" />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;