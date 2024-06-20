import image from '/public/img/hero-banner-image.jpg'

function ProductCard({ name, productId, price, imgSrc }) {
    return (
        <div className="product-card">
            <img src={`${imgSrc}`} alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
            <a href={`/products/${productId}`}><button>Add to Cart</button></a>
        </div>
    );
}

export default ProductCard;