import { useState } from "react";
import { Link } from "react-router-dom";
import { bmwProducts } from "../data/products";

export default function Products({ addToCart }) {
  const [selected, setSelected] = useState("all");

  const list =
    selected === "all"
      ? bmwProducts
      : bmwProducts.filter((p) => p.category === selected);

  return (
    <section className="section reveal">
      <h2 className="section-title">All BMW Models</h2>

      <div className="filters-row">
        {["all","X Series","3 Series","5 Series","7 Series","M Series","Z Series","i Series"]
          .map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selected === cat ? "active" : ""}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {list.map((car) => (
          <div className="car-card reveal" key={car.id}>
            <img src={car.image} alt={car.name} className="car-image" />
            <h3 className="car-name">{car.name}</h3>
            <p className="car-price">₹{car.price.toLocaleString()}</p>
            <p className="car-specs">{car.specs}</p>

            <div className="product-btn-row">
              <Link to={`/products/${car.id}`} className="btn-view">View</Link>
              <button onClick={() => addToCart(car)} className="btn-cart">Add</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
