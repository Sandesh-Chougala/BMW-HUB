import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

/* 🔥 Reveal animation runs on every route change */
function RevealHandler() {
  const location = useLocation();

  useEffect(() => {
    const revealOnScroll = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, [location.pathname]);

  return null;
}

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("bmw_cart_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("bmw_cart_v1", JSON.stringify(cart));
  }, [cart]);

  /* CART LOGIC */
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const updateQuantity = (id, qty) =>
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, qty) } : p
      )
    );

  const clearCart = () => setCart([]);

  return (
    <Router>
      <RevealHandler />

      <div className="App">

        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">
              BMW<span>HUB</span>
            </Link>

            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/products" className="nav-link">Cars</Link>

              <Link to="/cart" className="nav-link cart-badge">
                <ShoppingCart size={18} />
                <span>{cart.reduce((s, i) => s + i.quantity, 0)}</span>
              </Link>
            </div>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {mobileNavOpen && (
            <div className="mobile-menu active">
              <div className="mobile-menu-links">
                <Link to="/" className="nav-link" onClick={() => setMobileNavOpen(false)}>Home</Link>
                <Link to="/products" className="nav-link" onClick={() => setMobileNavOpen(false)}>Cars</Link>
                <Link to="/cart" className="nav-link cart-badge" onClick={() => setMobileNavOpen(false)}>
                  <ShoppingCart size={18} />
                  <span>{cart.reduce((s, i) => s + i.quantity, 0)}</span>
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                clearCart={clearCart}
              />
            }
          />
        </Routes>

        {/* FOOTER */}
        <footer className="footer reveal">
          <div className="footer-container">

            <div className="footer-col">
              <h3 className="footer-title">BMW HUB</h3>
              <p className="footer-text">
                Premium BMW car collection for performance and luxury lovers.
              </p>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Explore</h4>
              <a href="/products" className="footer-link">All Cars</a>
              <a href="/products" className="footer-link">SUV Series</a>
              <a href="/products" className="footer-link">M Performance</a>
              <a href="/products" className="footer-link">Electric Series</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <p className="footer-text">📧 sandeshchougala205@gmail.com</p>
              <p className="footer-text">📞 +91 63604 28201</p>
              <p className="footer-text">📍 Karnataka, India</p>
            </div>

          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} BMW HUB. All Rights Reserved.
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
