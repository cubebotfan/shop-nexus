import '../css/all-products.css';
import ProductCard from "../components/ProductCard";
import axios from 'axios';
import { useState, useEffect } from 'react';

function AllProducts() {

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
    <main className="container">
        <section className='title'>
            <h1>All Products we have to sell</h1>
        </section>
            <div className='product-list'>
                {products.map(product => {
                    return (
                        <ProductCard key={product.productId} name={product.name} productId={product.productId} price={product.price.toFixed(2)} imgSrc={product.imageURL} />
                    )
                })}
            </div>
    </main>
    )
}

export default AllProducts;