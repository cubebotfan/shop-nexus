/* eslint-disable react/jsx-no-undef */
function Home() {
  return (
    <main>
        <section className="hero">
            <h1>Welcome to Shop Nexus</h1>
            <p>The only shop where you can feel the connections</p>
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