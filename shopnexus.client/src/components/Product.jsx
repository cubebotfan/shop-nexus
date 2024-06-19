'use strict'

import React, { useState } from 'react';
import '../css/product.css';
import { useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTruck, faUndo, faStar, faStarHalfAlt, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import mainImage1 from '../img/the-graphic-space-FTrGeAy0RW4-unsplash.jpg';
import mainImage2 from '../img/toa-heftiba-9PVUNBgqVRo-unsplash.jpg';
import mainImage3 from '../img/tom-garritty-Mif7hfHkOHE-unsplash.jpg';
import mainImage4 from '../img/arun-clarke-ZqnlW6EAel0-unsplash.jpg';
import mainImage5 from '../img/nick-fithen-ixG2sEptSOM-unsplash.jpg';
import mainImage6 from '../img/sofia-lyu-7HwkHZ5Zabw-unsplash.jpg';

const images = [mainImage1, mainImage2, mainImage3, mainImage4, mainImage5, mainImage6];

const Product = () => {
    const [quantity, setQuantity] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity < 1 || newQuantity > 12) return;
        setQuantity(newQuantity);
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handlePrev(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className="product-page">
            <div className="breadcrumb">
                <a href="/">Clothing</a> / <a href="/">Tops</a>/ <span>T-shirt</span>
            </div>
            <div className="product-details">
                <div className="product-images" {...handlers}>
                    <FontAwesomeIcon icon={faArrowLeft} className="arrow arrow-left" onClick={handlePrev} />
                    <img src={images[currentIndex]} alt="Airpods Max" className="main-image" />
                    <FontAwesomeIcon icon={faArrowRight} className="arrow arrow-right" onClick={handleNext} />
                </div>

                <div className="product-info">
                    <h1>Summer T-shirt</h1>
                    <p>Made from the finest Fibre available till this time.</p>
                    <div className="rating">
                        {[...Array(4)].map((star, index) => (
                            <FontAwesomeIcon key={index} icon={faStar} />
                        ))}
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                        (121)
                    </div>
                    <div className="price">$45</div>
                    <div className="size-options">
                        <span>Select size:</span>
                        <div className="sizes">
                            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                <div
                                    key={size}
                                    className={`size ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => handleSizeSelect(size)}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="quantity">
                        <div className="quantity-box">
                            <button onClick={() => handleQuantityChange(quantity - 1)}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <input type="text" value={quantity} readOnly />
                            <button onClick={() => handleQuantityChange(quantity + 1)}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>
                    <div className="actions">
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    <div className="delivery-info">
                        <FontAwesomeIcon icon={faTruck} /> Speed Delivery <br />
                        <small>Enter your Postal code for Delivery Availability</small>
                    </div>
                    <div className="return-policy">
                        <FontAwesomeIcon icon={faUndo} /> Easy Returns <br />
                        <small>Return within 14 days from purchase. <a href="/">Details</a></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;