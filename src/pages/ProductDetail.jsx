import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { bmwProducts } from "../data/products";

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = bmwProducts.find((p) => p.id === parseInt(id, 10));

  const [showAlert, setShowAlert] = useState(false);

  if (!product) {
    return (
      <section className="section reveal active">
        <p>Product not found</p>
      </section>
    );
  }

  const handleTestDrive = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3500);
  };

  return (
    <section className="section reveal" style={{ maxWidth: 1100, margin: "0 auto" }}>
      <Link to="/products" className="nav-link" style={{ display: "inline-block", marginBottom: 18 }}>
        ← Back to Cars
      </Link>

      <div className="product-detail-grid">

        <div>
          <img
            src={product.image}
            alt={product.name}
            className="detail-image"
            loading="lazy"
          />
        </div>

        <div>
          <h1 className="section-title" style={{ fontSize: 36 }}>
            {product.name}
          </h1>

          <p className="car-price" style={{ fontSize: 28, margin: "12px 0 18px" }}>
            ₹{product.price.toLocaleString()}
          </p>

          <p style={{ color: "#94a3b8", lineHeight: 1.6, marginBottom: 18 }}>
            {product.description}
          </p>

          <p className="car-specs" style={{ marginBottom: 18 }}>
            {product.specs}
          </p>

          <div className="detail-btn-row">
            <button
              onClick={() => addToCart(product)}
              className="btn-primary"
            >
              Add to Cart
            </button>

            <button
              onClick={handleTestDrive}
              className="btn-secondary"
            >
              Book Test Drive
            </button>
          </div>
        </div>
      </div>

      {/* STYLED ALERT */}
      {showAlert && (
        <div className="toast-alert">
          ✅ User request has been sent.  
          Please wait — we will contact you via email.
        </div>
      )}
    </section>
  );
}
