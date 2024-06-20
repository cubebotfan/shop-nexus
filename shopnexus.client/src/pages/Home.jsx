import ProductCard from "./ProductCard";
import { useState } from "react";
import "../css/home.css";
import "../css/product.css";

function Home() {
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
                    <ProductCard name="Pulp Fiction T-Shirt" price="$29.99" imgSrc="../img/arun-clarke-ZqnlW6EAel0-unsplash.jpg" />
                    <ProductCard name="Social Savage" price="$39.99" imgSrc="../img/the-graphic-space-FTrGeAy0RW4-unsplash.jpg" />
                    <ProductCard name="Wild Bright" price="$49.99" imgSrc="../img/toa-heftiba-9PVUNBgqVRo-unsplash.jpg" />
                </div>
                <button className="show-all-products-btn" >View All Products</button>
            </section>
        </main>
    );
}

export default Home;