import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css"; // CSS ফাইল

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
    toast.error("❌ Item removed from wishlist", { position: "top-right" });
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));

    toast.success(
      `✅ ${product.name || product.Productname || "Product"} added to cart!`,
      { position: "top-right", autoClose: 1800 }
    );
  };

  // ⭐ Wishlist-এর টোটাল প্রাইস (ডলার সাইন বাদ দিয়ে সংখ্যা হিসাব)
  const totalPrice = wishlist.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price?.toString().replace("$", "")) || 0;
    return acc + numericPrice;
  }, 0);

  return (
    <>
      <ToastContainer />
      <ol className="section-banner py-3 position-relative bg-light mb-0">
        <li className="position-relative">
          <Link to="/" className="text-decoration-none">Home</Link>
        </li>
        <li className="position-relative active ps-3 fw-bold">Wishlist</li>
      </ol>

      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4 wishlist-title">
          ❤️ Your Wishlist
        </h2>

        {wishlist.length === 0 ? (
          <p className="text-muted text-center fs-5">Your wishlist is empty.</p>
        ) : (
          <>
            {/* ✅ Total Price */}
            <div className="text-end mb-4">
              <h5 className="fw-bold total-price">
                Total Price: <span className="text-success">${totalPrice.toFixed(2)}</span>
              </h5>
            </div>

            {/* ✅ Cards */}
            <div className="row g-4">
              {wishlist.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="wishlist-card shadow-sm border-0 rounded-4 p-2 h-100">
                    <div className="wishlist-img-wrapper">
                      <img
                        src={item.image}
                        className="img-fluid rounded-4"
                        alt={item.name || item.Productname || "Product"}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h5 className="fw-semibold mt-2 mb-2">
                        {item.name || item.Productname}
                      </h5>

                      {/* ⭐ এখানে শুধু একবার $ */}
                      <p className="fw-bold text-success fs-5 mb-3">
                        ${parseFloat(item.price?.toString().replace("$", ""))}
                      </p>

                      <div className="d-flex justify-content-center gap-2">
                        <button
                          className="btn btn-dark px-3"
                          onClick={() => addToCart(item)}
                        >
                          🛒 Add to Cart
                        </button>
                        <button
                          className="btn btn-outline-danger px-3"
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          ❌ Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Wishlist;
