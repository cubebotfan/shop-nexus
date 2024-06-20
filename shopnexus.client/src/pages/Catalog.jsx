import React from 'react'
import ProductCard from './ProductCard'
import '../css/catalog.css'

function Catalog() {
  return (
    <div className='container'>
        <div className="catalog-content">
            <h2>All the products</h2>
            <div className="catalog">
                <ProductCard name="Pulp Fiction T-Shirt" price="$29.99" imgSrc="../img/arun-clarke-ZqnlW6EAel0-unsplash.jpg" />
                <ProductCard name="Social Savage" price="$39.99" imgSrc="../img/the-graphic-space-FTrGeAy0RW4-unsplash.jpg" />
                <ProductCard name="Wild Bright" price="$49.99" imgSrc="../img/toa-heftiba-9PVUNBgqVRo-unsplash.jpg" />
                <ProductCard name="Pulp Fiction T-Shirt" price="$29.99" imgSrc="../img/arun-clarke-ZqnlW6EAel0-unsplash.jpg" />
                <ProductCard name="Social Savage" price="$39.99" imgSrc="../img/the-graphic-space-FTrGeAy0RW4-unsplash.jpg" />
                <ProductCard name="Wild Bright" price="$49.99" imgSrc="../img/toa-heftiba-9PVUNBgqVRo-unsplash.jpg" />
                <ProductCard name="Pulp Fiction T-Shirt" price="$29.99" imgSrc="../img/arun-clarke-ZqnlW6EAel0-unsplash.jpg" />
                <ProductCard name="Social Savage" price="$39.99" imgSrc="../img/the-graphic-space-FTrGeAy0RW4-unsplash.jpg" />
                <ProductCard name="Wild Bright" price="$49.99" imgSrc="../img/toa-heftiba-9PVUNBgqVRo-unsplash.jpg" />
                <ProductCard name="Pulp Fiction T-Shirt" price="$29.99" imgSrc="../img/arun-clarke-ZqnlW6EAel0-unsplash.jpg" />
                <ProductCard name="Social Savage" price="$39.99" imgSrc="../img/the-graphic-space-FTrGeAy0RW4-unsplash.jpg" />
                <ProductCard name="Wild Bright" price="$49.99" imgSrc="../img/toa-heftiba-9PVUNBgqVRo-unsplash.jpg" />
            </div>
        </div>
    </div>
  )
}

export default Catalog