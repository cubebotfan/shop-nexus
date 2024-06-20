import image from '/public/img/hero-banner-image.jpg'

function ProductCard({ name, price, imgSrc }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductCard;