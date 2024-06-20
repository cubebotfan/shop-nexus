function CategoryCard({ name, categoryId, imgSrc }) {
    return (
        <div className="product-card">
            <img src={imgSrc} alt={name} />
            <h3>{name}</h3>
            <a href={`/categories/${categoryId}`}><button>Visit Category</button></a>
        </div>
    );
}

export default CategoryCard;