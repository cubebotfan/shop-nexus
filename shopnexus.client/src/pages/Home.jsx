import ProductCard from "../components/ProductCard";
import "../css/home.css";

function Home() {
  return (
    <main>
        <section className="hero">
            <h1>Welcome to Shop Nexus</h1>
            <p>Your one-stop shop for all your needs.</p>
        </section>
        <section className="featured-products">
            <h2>Featured Products</h2>
            <div className="product-list">
                <ProductCard name="Product 1" price="$29.99" />
                <ProductCard name="Product 2" price="$39.99" />
                <ProductCard name="Product 3" price="$49.99" />
            </div>
        </section>
    </main>
  )
}

export default Home;