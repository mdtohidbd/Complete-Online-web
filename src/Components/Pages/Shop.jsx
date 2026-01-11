import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import ProductsData from "./../../Product.json";

const Shop = () => {
  const [filterSortOption, setFilterSortOption] = useState("all");
  const navigate = useNavigate();

  const handleFilterSort = () => {
    let filtered = [...ProductsData];

    // Filter by Tag
    if (filterSortOption === "New" || filterSortOption === "Sale") {
      filtered = filtered.filter((product) => product.tag === filterSortOption);
    }

    // Sort by Price
    if (filterSortOption === "low") {
      filtered.sort(
        (a, b) =>
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
      );
    }

    if (filterSortOption === "high") {
      filtered.sort(
        (a, b) =>
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
      );
    }
    return filtered;
  };

  const displayedProducts = handleFilterSort();

  // Add to Wishlist
  const addToWishlist = (product) => {
    const existing = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!existing.some((p) => p.id === product.id)) {
      const updated = [...existing, product];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      window.dispatchEvent(new Event("wishlistUpdated"));
      toast.success(`${product.Prdurctname} added to your Wishlist`);
    } else {
      toast.info(`${product.Prdurctname} is already in your Wishlist`);
    }
  };

  // Add to Cart
  const addToCart = (product) => {
    const existing = JSON.parse(localStorage.getItem("cart")) || [];
    if (!existing.some((p) => p.id === product.id)) {
      const updated = [...existing, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updated));
      window.dispatchEvent(new Event("cartUpdated"));
      toast.success(`${product.Prdurctname} added to your Cart`);
    } else {
      toast.info(`${product.Prdurctname} is already in your Cart`);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Breadcrumb */}
      <ol className="section-banner py-3 position-relative">
        <li className="position-relative">
          <Link to="/">Home</Link>
        </li>
        <li className="position-relative active">
          <span className="ps-5">Products</span>
        </li>
      </ol>

      <div className="shop-container">
        <div className="container">
          <h1 className="text-center py-4 fw-semibold">Products</h1>

          {/* Filter & Sort */}
          <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <div className="text-muted" style={{ fontSize: "1.1rem" }}>
                <strong>{displayedProducts.length}</strong> product
                {displayedProducts.length !== 1 && "s"} for "
                {filterSortOption === "all"
                  ? "All"
                  : filterSortOption.charAt(0).toUpperCase() +
                    filterSortOption.slice(1)}
                "
              </div>

              <div>
                <select
                  className="form-select py-2 fs-6"
                  style={{
                    minWidth: "260px",
                    backgroundColor: "#f5f5f5",
                    border: "0px",
                  }}
                  value={filterSortOption}
                  onChange={(e) => setFilterSortOption(e.target.value)}
                >
                  <option value="all">All Products</option>
                  <option value="New">New Products</option>
                  <option value="Sale">Sale Products</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="row">
            {displayedProducts.map((product) => (
              <div className="col-md-6 col-lg-4 mb-4" key={product.id}>
                <div className="product-item text-center position-relative border p-3 rounded shadow-sm h-100">
                  <div className="product-image w-100 position-relative overflow-hidden">
                    <img
                      src={product.image}
                      className="img-fluid"
                      alt={product.Prdurctname}
                    />
                    {product.secondImage && (
                      <img
                        src={product.secondImage}
                        className="img-fluid second-img"
                        alt={product.Prdurctname}
                      />
                    )}

                    {/* Icons */}
                    <div className="product-icons gap-3 position-absolute">
                      <button
                        className="btn btn-light border rounded-circle"
                        title="Add to Wishlist"
                        onClick={() => addToWishlist(product)}
                      >
                        <i className="bi bi-heart fs-5"></i>
                      </button>
                      <button
                        className="btn btn-light border rounded-circle ms-2"
                        title="Add to Cart"
                        onClick={() => addToCart(product)}
                      >
                        <i className="bi bi-cart3 fs-5"></i>
                      </button>
                    </div>

                    {/* Tag */}
                    {product.tag && (
                      <span
                        className={`tag badge position-absolute top-0 start-0 m-2 text-white ${
                          product.tag === "New" ? "bg-danger" : "bg-success"
                        }`}
                      >
                        {product.tag}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <Link
                    to={`/product/${product.id}`}
                    className="text-decoration-none text-black"
                  >
                    <div className="product-content pt-3">
                      {product.oldPrice && (
                        <span className="text-muted text-decoration-line-through me-2">
                          {product.oldPrice}
                        </span>
                      )}
                      <span className="price d-block fw-bold">
                        {product.price}
                      </span>
                      <h3 className="title pt-1 fs-5">{product.Prdurctname}</h3>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Shop;
