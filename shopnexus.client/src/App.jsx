import './css/app.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";


function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                {/*default*/}
                <Route path='/*' element={<Navigate to="/" replace="true" />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;