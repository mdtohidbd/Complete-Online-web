import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const updateQuantity = (id, type) => {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        if (type === "increase") return { ...item, quantity: item.quantity + 1 };
        else if (type === "decrease" && item.quantity > 1)
          return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
    toast.error("Item Removed From Cart!");
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = Number(item.price.replace("$", ""));
    return acc + price * item.quantity;
  }, 0);

  return (
    <>
      <ToastContainer />
      {/* ======== Breadcrumb ======== */}
      <ol style={breadcrumbStyle}>
        <li>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={{ fontWeight: "bold" }}>Cart</li>
      </ol>

      <div style={{ padding: "20px" }}>
        {cartItems.length === 0 ? (
          <div style={emptyCartStyle}>
            <p style={{ fontSize: "1.2rem" }}>Your Cart is Empty!</p>
            <Link to="/shop" style={shopButtonStyle}>Back To Shop</Link>
          </div>
        ) : (
          <>
            {/* ======== Cart Items ======== */}
            <div style={cartGridStyle}>
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    ...cartCardStyle,
                    animation: `fadeInUp 0.5s ease ${index * 0.1}s forwards`,
                    opacity: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 12px 20px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.1)";
                  }}
                >
                  <img src={item.image} alt={item.name} style={cardImageStyle} />
                  <div style={{ padding: "12px" }}>
                    <h6 style={{ marginBottom: "6px" }}>{item.name}</h6>

                    <p style={{ margin: "5px 0", color: "#555" }}>
                      Price: {item.price}
                    </p>

                    <div style={quantityStyle}>
                      <button style={quantityButtonStyle}
                        onClick={() => updateQuantity(item.id, "decrease")}>-</button>
                      <span style={{ fontWeight: "bold" }}>{item.quantity}</span>
                      <button style={quantityButtonStyle}
                        onClick={() => updateQuantity(item.id, "increase")}>+</button>
                    </div>
                    <button style={removeButtonStyle} onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ======== Total Section ======== */}
            <div style={totalSectionStyle}>
              <div style={{ marginBottom: "10px" }}>
                Total Price: <span style={{ color: "#0d6efd" }}>${totalPrice.toFixed(2)}</span>
              </div>
              <button style={checkoutButtonStyle}>Checkout</button>
            </div>
          </>
        )}
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </>
  );
}

/* ======= Styles ======= */
const breadcrumbStyle = {
  background: "#f8f9fa",
  padding: "12px 20px",
  display: "flex",
  gap: "10px",
  listStyle: "none",
  borderRadius: "10px",
  marginBottom: "20px"
};

const linkStyle = { textDecoration: "none", color: "#0d6efd" };

/* ✅ নেভিগেশনের ঠিক নিচে vertically center */
const emptyCartStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "40vh" // ব্রেডক্রাম্বের নিচেই সুন্দরভাবে বসবে
};

const shopButtonStyle = {
  padding: "10px 20px",
  background: "#0d6efd",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  marginTop: "12px"
};

/* ✅ কার্ডগুলোকে উপরে রাখতে */
const cartGridStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "20px",
  marginTop: "10px"
};

const cartCardStyle = {
  width: "260px",
  borderRadius: "15px",
  overflow: "hidden",
  background: "#fff",
  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
  transition: "transform 0.3s, box-shadow 0.3s"
};

const cardImageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover"
};

const quantityStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "10px"
};

const quantityButtonStyle = {
  padding: "4px 10px",
  borderRadius: "8px",
  border: "1px solid #0d6efd",
  background: "#fff",
  color: "#0d6efd",
  cursor: "pointer",
  fontWeight: "bold"
};

const removeButtonStyle = {
  padding: "6px 12px",
  borderRadius: "8px",
  border: "none",
  background: "#dc3545",
  color: "#fff",
  cursor: "pointer",
  fontSize: "0.9rem"
};

const totalSectionStyle = {
  marginTop: "30px",
  textAlign: "center",
  background: "#f1f3f5",
  padding: "20px",
  borderRadius: "15px",
  fontSize: "1.2rem",
  fontWeight: "bold"
};

const checkoutButtonStyle = {
  padding: "10px 25px",
  borderRadius: "12px",
  border: "none",
  background: "#198754",
  color: "white",
  marginTop: "10px",
  cursor: "pointer",
  fontSize: "1rem"
};

export default Cart;
