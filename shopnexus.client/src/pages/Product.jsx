import { useState, useEffect } from 'react';
import '../css/product.css';
/*import { useSwipeable } from 'react-swipeable';*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTruck, faUndo, faStar, faStarHalfAlt, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const Product = () => {
    const [quantity, setQuantity] = useState(1);
/*    const [currentIndex, setCurrentIndex] = useState(0);*/
    const [selectedSize, setSelectedSize] = useState(null);
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState(null);
    const [categoryTree, setCategoryTree] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const apiLink = 'https://localhost:7182/api';

        axios({
            url: `${apiLink}/products/${productId}`,
            method: "GET"
        }).then(res => {
            setProductDetails(res.data);
            axios({
                url: `${apiLink}/categories/${res.data.categoryId}/parent-tree`,
                method: "GET"
            }).then(res => {
                setCategoryTree(res.data.reverse());
            }).catch(error => {
                
            })
        }).catch(error => {
            navigate('.../');
        })
    }, []);


    const handleQuantityChange = (newQuantity) => {
        if (newQuantity < 1 || newQuantity > 12) return;
        setQuantity(newQuantity);
    };

/*    const handleNext = () => {
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
    });*/

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    return (
        (productDetails) ?
            <main className="product-page">
                <div className="container">
                    <div className="breadcrumb">
                        {categoryTree.map((category, i, a) => {
                            return (<a href={`/categories/${category.categoryId}`} key={category.categoryId}>{category.name}{(i+1<a.length)? " /":""}</a>)
                        })}
                    </div>
                    <div className="product-details">
                        <div className="product-images"> {/*...handlers}*/}
                            {/*<FontAwesomeIcon icon={faArrowLeft} className="arrow arrow-left" onClick={handlePrev} />*/}
                            <img src={productDetails.imageURL} alt="" className="main-image" />
                            {/*<FontAwesomeIcon icon={faArrowRight} className="arrow arrow-right" onClick={handleNext} />*/}
                        </div>

                        <div className="product-info">
                            <h1>{ productDetails.name }</h1>
                            <p>{productDetails.description}</p>
                            <div className="rating">
                                {[...Array(4)].map((star, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} />
                                ))}
                                <FontAwesomeIcon icon={faStarHalfAlt} />
                                (121)
                            </div>
                            <div className="price">${productDetails.price.toFixed(2)}</div>
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
            </main>
        : ""
    );
};

export default Product;