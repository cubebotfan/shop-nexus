import ProductCard from '../components/ProductCard'
import '../css/catalog.css'
import { useState, useEffect } from "react";

function Catalog({ products }) {
    const [productsList, setProducts] = useState(null)

    useEffect(() => { setProducts(products) }, [])
    useEffect(() => { console.log("This are my products", productsList) }, [productsList])

    return (
        <div className='container'>
            <div className="catalog-content">
                <h2>All the products</h2>
                <div className="catalog">
                    {productsList && productsList.map(product => (
                        <ProductCard name={product.name} price={product.price} imgSrc={product.imageURL} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Catalog