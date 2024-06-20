import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../css/home.css";
import "../css/product.css";
import { Link } from 'react-router-dom'

function Home() {
    const [isModalClosed, setIsModalClosed] = useState(true)
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const apiLink = 'https://localhost:7182/api';
        axios({
            url: `${apiLink}/products`,
            method: "GET"
        }).then(res => {
            setProducts(res.data);
        }).catch(error => {
            console.error('Cannot get products from api');
        })
    }, []);
    return (
        <main>
            <section className="hero">
                <div className="background-dark-filter">
                    <h1>Welcome to Shop Nexus</h1>
                    <p>The only place you can feel the connection</p>
                </div>
            </section>
            <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="product-list">
                    {products.slice(0,4).map(product => {
                        return (
                            <ProductCard key={product.productId} name={product.name} price={product.price.toFixed(2)} imgSrc={product.imageURL} />
                        )
                    }) }
                </div>
                <button className="show-all-products-btn" ><Link to='/catalog'>View all Products</Link></button>
            </section>
        </main>
    );
}

export default Home;