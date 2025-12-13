import { useParams, Link } from "react-router-dom";
import { bmwProducts } from "../data/products";

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = bmwProducts.find((p) => p.id === parseInt(id, 10));

  if (!product) return <div className="section"><p>Product not found</p></div>;

  return (
    <section className="section" style={{ maxWidth: 1100, margin: "0 auto" }}>
      <Link to="/products" className="nav-link" style={{ display: "inline-block", marginBottom: 18 }}>
        ← Back to Products
      </Link>

      <div className="product-detail-grid">
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", height: 520, objectFit: "cover", borderRadius: 18 }}
            loading="lazy"
          />
        </div>

        <div>
          <h1 className="section-title" style={{ fontSize: 36 }}>{product.name}</h1>
          <p className="car-price" style={{ fontSize: 28, margin: "12px 0 18px" }}>₹{product.price.toLocaleString()}</p>
          <p style={{ color: "#94a3b8", lineHeight: 1.6, marginBottom: 18 }}>{product.description}</p>

          <p className="car-specs" style={{ marginBottom: 18 }}>{product.specs}</p>

          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => addToCart(product)} className="btn btn-primary" style={{ flex: 1, fontSize: 16 }}>
              Add to Cart
            </button>
            <button className="btn btn-secondary" style={{ padding: "1rem 1.5rem" }}>Book Test Drive</button>
          </div>
        </div>
      </div>
    </section>
  );
}
