// eslint-disable-next-line react/prop-types
function ProductCard({ name, price }) {
    return (
        <div className="product-card">
            <img src={`path/to/${name}.jpg`} alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductCard;