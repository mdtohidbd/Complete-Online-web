import React, { useEffect, useState } from "react";
import Products from "./../../Product.json";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = Products.find((p) => p.id == id);

  const [mainImage, setMainImage] = useState("");
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
      setImages([product.image, product.secondImage].filter(Boolean));
      setQuantity(1);
    }
  }, [product]);

  const colors = ["#000000", "#7B3F00", "#9BBEC8"];

  if (!product) return <p>Product not found</p>;

  return (
    <>
      {/* ======== Breadcrumb ======== */}
      <ol className="section-banner py-3 position-relative">
        <li className="position-relative">
          <Link to="/">Home</Link>
        </li>
        <li className="position-relative active">
          <a href="#" className="ps-5">
            Beauty & Cosmetics
          </a>
        </li>
        <li className="position-relative active">
          <a href="#" className="ps-5">
            {product.Productname}
          </a>
        </li>
      </ol>

      {/* ======== Product Details ======== */}
      <div className="container py-5">
        <div className="row">
          {/* Left Images */}
          <div className="col-lg-6">
            <div className="d-flex flex-column-reverse flex-md-row mb-4">
              <div className="d-flex flex-column me-3 thumbnail-images">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt=""
                    onClick={() => setMainImage(img)}
                    className={`img-thumbnail ${
                      mainImage === img ? "border-dark" : ""
                    }`}
                    style={{
                      width: 60,
                      height: 80,
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>

              <img src={mainImage} className="img-fluid" alt={product.Productname} />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-xl-6">
            <h5 className="fw-bold">{product.price}</h5>
            <h2 className="mb-4 fw-semibold">{product.Productname}</h2>

            <p className="mb-1 fw-semibold">Color: Black</p>
            <div className="d-flex gap-2 mb-4">
              {colors.map((color, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: color,
                    width: 25,
                    height: 25,
                    borderRadius: "50%",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                  }}
                ></div>
              ))}
            </div>

            <p className="fw-semibold mb-1">Quantity</p>
            <div className="d-flex align-items-center gap-3 mb-4 quantity">
              <div
                className="d-flex align-items-center quantity-box"
                style={{ maxWidth: "200px" }}
              >
                <button
                  className="btn-count border-0"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>

                <input
                  type="text"
                  className="form-control text-center mx-2"
                  value={quantity}
                  readOnly
                />

                <button
                  className="btn-count border-0"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>

              <button className="btn-custome w-100">Add to cart</button>
            </div>

            <button className="btn-custome2 w-100 border-0 mt-3">
              Buy it now
            </button>

            <hr />

            <p>
              <strong>Vendor:</strong> Vendor 4
            </p>
            <p>
              <strong>Collection:</strong> Beauty & Cosmetic, Bestseller,
              Featured, New Arrival, Skincare, under $40
            </p>
            <p>
              <strong>SKU:</strong> 501
            </p>
          </div>
        </div>
      </div>

      {/* ======== Tabs ======== */}
      <div className="container my-5">
        <ul
          className="nav nav-tabs border-0 justify-content-center mb-4"
          id="productTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active border-0 fw-4 text-capitalize"
              id="description-tab"
              data-bs-toggle="tab"
              data-bs-target="#description"   // ✅ Corrected
              type="button"
              role="tab"
              aria-controls="description"
              aria-selected="true"
            >
              Description
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link border-0 fw-4 text-capitalize"
              id="shipping-tab"
              data-bs-toggle="tab"
              data-bs-target="#shipping"     // ✅ Corrected
              type="button"
              role="tab"
              aria-controls="shipping"
              aria-selected="false"
            >
              Shipping and Return
            </button>
          </li>
        </ul>

        <div className="tab-content" id="productTabContent">
          <div
            className="tab-pane fade show active"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <p>
              <strong>For Normal , oily , Combination skin types</strong>
            </p>
            <p>For Normal , oily , Combination skin types</p>
            <h5 className="mt-4">Benefits</h5>

            <ul className="Benefits-list p-0">
              <li className="position-relative">Buildable medium-to-full coverage</li>
              <li className="position-relative">Weightless, airy feel—no cakiness!</li>
              <li className="position-relative">Long-wearing</li>
              <li className="position-relative">Evens skin tone</li>
              <li className="position-relative">
                Available in 07 shades (all exclusive to makeaholic!)
              </li>
            </ul>
          </div>

          <div
            className="tab-pane fade"
            id="shipping"
            role="tabpanel"
            aria-labelledby="shipping-tab"
          >
            <p>
              We typically process and ship orders within 1 week, with shipping
              costs calculated at checkout. Standard delivery takes 3–5 business
              days, while express options are available for faster delivery.
              If you need to change your shipping address after placing an order,
              please contact us as soon as possible. For returns, we accept
              items within 1 week, provided they are unused and in original
              packaging.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
