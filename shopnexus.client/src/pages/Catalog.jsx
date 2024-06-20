import ProductCard from '../components/ProductCard'
import '../css/catalog.css'
import { useState, useEffect } from "react";
import axios from 'axios';

function Catalog() {
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
        <main className='container'>
            <div className="catalog-content">
                <h2>All the products</h2>
                <div className='catalog'>
                    {products.map(product => {
                        return (
                            <ProductCard key={product.productId} name={product.name} productId={product.productId} price={product.price.toFixed(2)} imgSrc={product.imageURL} />
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default Catalog