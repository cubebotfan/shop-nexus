import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

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
                <button className="show-all-products-btn" >View All Products</button>
            </section>
            <div className="catalog-modal" style={{display: isModalClosed ? "none" : "grid"}}>
                <div className="catalog-content">
                    <h2>All the products</h2>
                    <IoMdClose className="close-btn" onClick={() => {setIsModalClosed(true)}}/>
                    <div className="catalog">
                        <ProductCard name="Pulp Fiction T-Shirt" price="$29.99" imgSrc="/public/img/arun-clarke-ZqnlW6EAel0-unsplash.jpg" />
                        <ProductCard name="Social Savage" price="$39.99" imgSrc="/public/img/the-graphic-space-FTrGeAy0RW4-unsplash.jpg" />
                        <ProductCard name="Wild Bright" price="$49.99" imgSrc="/public/img/toa-heftiba-9PVUNBgqVRo-unsplash.jpg" />
                        <ProductCard name="Pulp Fiction T-Shirt" price="$29.99" imgSrc="/public/img/arun-clarke-ZqnlW6EAel0-unsplash.jpg" />
                        <ProductCard name="Social Savage" price="$39.99" imgSrc="/public/img/the-graphic-space-FTrGeAy0RW4-unsplash.jpg" />
                        <ProductCard name="Wild Bright" price="$49.99" imgSrc="/public/img/toa-heftiba-9PVUNBgqVRo-unsplash.jpg" />
                        <ProductCard name="Pulp Fiction T-Shirt" price="$29.99" imgSrc="/public/img/arun-clarke-ZqnlW6EAel0-unsplash.jpg" />
                        <ProductCard name="Social Savage" price="$39.99" imgSrc="/public/img/the-graphic-space-FTrGeAy0RW4-unsplash.jpg" />
                        <ProductCard name="Wild Bright" price="$49.99" imgSrc="/public/img/toa-heftiba-9PVUNBgqVRo-unsplash.jpg" />
                        <ProductCard name="Pulp Fiction T-Shirt" price="$29.99" imgSrc="/public/img/arun-clarke-ZqnlW6EAel0-unsplash.jpg" />
                        <ProductCard name="Social Savage" price="$39.99" imgSrc="/public/img/the-graphic-space-FTrGeAy0RW4-unsplash.jpg" />
                        <ProductCard name="Wild Bright" price="$49.99" imgSrc="/public/img/toa-heftiba-9PVUNBgqVRo-unsplash.jpg" />
                    </div>
                </div>
            </div>
            <button className='change' onClick={() => navigate("/all-products")}>Click here to See all Products we have</button>
        </main>
    );
}

export default Home;