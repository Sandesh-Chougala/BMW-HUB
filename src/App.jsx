import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

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

  // Scroll reveal animations
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, qty) } : p
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <Router>
      <div className="App">

        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-container">

            <Link to="/" className="logo">BMW<span>HUB</span></Link>

            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/products" className="nav-link">Products</Link>

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

          {mobileNavOpen && (
            <div className="mobile-menu active">
              <div className="mobile-menu-links">
                <Link to="/" className="nav-link" onClick={() => setMobileNavOpen(false)}>Home</Link>
                <Link to="/products" className="nav-link" onClick={() => setMobileNavOpen(false)}>Products</Link>
                <Link to="/cart" className="nav-link cart-badge" onClick={() => setMobileNavOpen(false)}>
                  <ShoppingCart size={18} />
                  <span>{cart.reduce((s, i) => s + i.quantity, 0)}</span>
                </Link>
              </div>
            </div>
          )}
        </nav>

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

        {/* Footer */}
        <footer className="footer reveal">
          <div className="footer-container">

            <div className="footer-col">
              <h3 className="footer-title">BMW HUB</h3>
              <p className="footer-text">
                Premium BMW collection crafted for true performance lovers.
              </p>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Explore</h4>
              <a href="/products" className="footer-link">All Models</a>
              <a href="/products" className="footer-link">Electric Series</a>
              <a href="/products" className="footer-link">Sports Series</a>
              <a href="/products" className="footer-link">SUV Lineup</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <p className="footer-text">sandeshchougala205@gmail.com</p>
              <p className="footer-text">+91 63604 28201</p>
            </div>

          </div>

          <div className="footer-bottom">
            © 2025 BMW HUB. All Rights Reserved.
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
