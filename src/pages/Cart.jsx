export default function Cart({
  cart,
  removeFromCart,
  updateQuantity,
  clearCart
}) {
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <section className="section reveal">
      <h2 className="section-title">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="muted-center">Your cart is empty</p>
      ) : (
        <>
          <div style={{ display: "grid", gap: 16 }}>
            {cart.map((item) => (
              <div className="car-card cart-row" key={item.id}>
                <img
                  src={item.image}
                  className="cart-img"
                  alt={item.name}
                />

                <div style={{ flex: 1 }}>
                  <h3 className="car-name">{item.name}</h3>
                  <p className="car-specs">{item.specs}</p>
                  <p className="car-price">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>

                <div className="qty-controls">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                    className="qty-btn"
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                    className="qty-btn"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{total.toLocaleString()}</h3>

            <button className="btn btn-primary large">
              Checkout
            </button>
            <button
              className="btn btn-secondary"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </section>
  );
}
