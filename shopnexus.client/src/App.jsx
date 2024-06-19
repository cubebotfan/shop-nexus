import './css/app.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import './css/product.css';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                {/*default*/}
                <Route path='/*' element={<Navigate to="/" replace="true" />} />
                <Route exact path="/product" element={<Product/> } />
            </Routes>
            <Footer />
        </>
    )
}

export default App;