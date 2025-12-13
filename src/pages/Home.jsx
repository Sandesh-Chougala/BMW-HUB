import { Link } from "react-router-dom";
import { bmwProducts } from "../data/products";

export default function Home({ addToCart }) {
  const categories = ["X Series", "M Series", "i Series", "3 Series", "5 Series"];
  const featured = categories
    .map((cat) => bmwProducts.find((p) => p.category === cat))
    .filter(Boolean);

  return (
    <>
      <section className="hero">
        <div className="hero-content reveal">
          <h1 className="hero-title">BMW HUB</h1>
          <p className="hero-subtitle">
            Experience premium performance with the latest BMW models.
          </p>
          <Link to="/products" className="btn btn-primary">
            Explore All Models
          </Link>
        </div>
      </section>

      <section className="section reveal">
        <h2 className="section-title">Featured Models</h2>

        <div className="products-grid">
          {featured.map((car) => (
            <div className="car-card reveal" key={car.id}>
              <img src={car.image} className="car-image" />
              <h3 className="car-name">{car.name}</h3>
              <p className="car-price">₹{car.price.toLocaleString()}</p>

              <div className="product-btn-row">
                <Link to={`/products/${car.id}`} className="btn-view">View</Link>
                <button onClick={() => addToCart(car)} className="btn-cart">Add</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
