import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Products from "./../../Product.json";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import subBanner1 from "../../assets/banner-1.webp";
import subBanner2 from "../../assets/banner-2.webp";

import serviceImg1 from "./../../assets/service-icon-1.svg";
import serviceImg2 from "./../../assets/service-icon-2.svg";
import serviceImg3 from "./../../assets/service-icon-3.svg";
import serviceImg4 from "./../../assets/service-icon-4.svg";

import brand1 from "./../../assets/brand-1.png";
import brand2 from "./../../assets/brand-2.png";
import brand3 from "./../../assets/brand-3.png";

import femalebanner from "./../../assets/banner-female.webp";

import discoverl from './../../assets/discover-1.webp';
import discover2 from './../../assets/discover-2.webp';

import socialImage1 from './../../assets/social-image-1.jpg';
import socialImage2 from './../../assets/social-image-2.jpg';
import socialImage3 from './../../assets/social-image-3.jpg';
import socialImage4 from './../../assets/social-image-4.jpg';
import socialImage5 from './../../assets/social-image-5.jpg';

const Index = () => {
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

      {/* Hero Section */}
      <div className="hero">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <div className="hero-wrap hero-wrap1">
              <div className="hero-content">
                <h5>ESSENTIAL ITEMS</h5>
                <h1>
                  Beauty Inspired <br /> by Real Life
                </h1>
                <p>
                  Made using clean, non-toxic ingredients, our products are
                  designed for everyone
                </p>
                <Link to="/shop" className="btn hero-btn mt-3">
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-wrap hero-wrap2">
              <div className="hero-content">
                <h5>NEW COLLECTION</h5>
                <h1>Get the Perfectly Hydrated Skin</h1>
                <p>
                  Made using clean, non-toxic ingredients, our products are
                  designed for everyone
                </p>
                <Link to="/shop" className="btn hero-btn mt-3">
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-wrap hero-wrap3">
              <div className="hero-content">
                <h5>GET THE GLOW</h5>
                <h1>
                  Be your Kind <br /> of Beautiful
                </h1>
                <p>
                  Made using clean, non-toxic ingredients, our products are
                  designed for everyone
                </p>
                <Link to="/shop" className="btn hero-btn mt-3">
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Featured Products */}
      <div className="product-container py-5 my-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-semibold fs-1">Our Featured Products</h2>
            <p className="text-muted">Get the skin you want to feel</p>
          </div>

          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            modules={[Navigation]}
            navigation
            breakpoints={{
              0: { slidesPerView: 1 },
              767: { slidesPerView: 2 },
              991: { slidesPerView: 3 },
              1199: { slidesPerView: 4 },
            }}
          >
            {Products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-item text-center position-relative">
                  <div className="product-image w-100 position-relative overflow-hidden">
                    <img
                      src={product.image}
                      className="img-fluid"
                      alt={product.Prdurctname}
                    />
                    {product.secondImage && (
                      <img
                        src={product.secondImage}
                        className="img-fluid"
                        alt={product.Prdurctname}
                      />
                    )}
                    <div className="product-icons gap-3">
                      <button
                        className="btn"
                        title="Add to Wishlist"
                        onClick={() => addToWishlist(product)}
                      >
                        <i className="bi bi-heart fs-5"></i>
                      </button>
                      <button
                        className="btn"
                        title="Add to Cart"
                        onClick={() => addToCart(product)}
                      >
                        <i className="bi bi-cart3 fs-5"></i>
                      </button>
                    </div>
                    {product.tag && (
                      <span
                        className={`tag badge text-white ${
                          product.tag === "New" ? "bg-danger" : "bg-success"
                        }`}
                      >
                        {product.tag}
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/product/${product.id}`}
                    className="text-decoration-none text-black"
                  >
                    <div className="product-content pt-3">
                      <span className="price">{product.price}</span>
                      <h3 className="title pt-1">{product.Prdurctname}</h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Banner */}
      <div className="banners py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="banner-card custom-banner position-relative overflow-hidden rounded">
                <img
                  src={subBanner1}
                  alt=""
                  className="img-fluid banner-img w-100 h-100"
                />
                <div className="banner-content position-absolute">
                  <h3 className="fw-bold">New Collection</h3>
                  <h1 className="display-6">
                    Intensive Glow C+ <br /> Serum
                  </h1>
                  <button className="btn banner-btn mt-2">EXPLORE MORE</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="banner-card custom-banner position-relative overflow-hidden rounded">
                <img
                  src={subBanner2}
                  alt=""
                  className="img-fluid banner-img w-100 h-100"
                />
                <div className="banner-content banner-content2 position-absolute">
                  <h1 className="display-6 fw-bold">30% off Everything</h1>
                  <p className="fs-5">
                    Makeup with extended range in <br /> Colors for every human.
                  </p>
                  <button className="btn banner-btn mt-2">SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="container py-5 my-5">
        <div className="row text-center">
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="service-card p-4">
              <img src={serviceImg1} alt="" className="img-fluid mb-3" />
              <h4 className="mt-3 mb-1">Free Shipping</h4>
              <p className="text-muted fs-6 fw-semibold">
                Free Shipping for orders over $199
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="service-card p-4">
              <img src={serviceImg2} alt="" className="img-fluid mb-3" />
              <h4 className="mt-3 mb-1">Returns</h4>
              <p className="text-muted fs-6 fw-semibold">
                Within 30 days for an exchange.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="service-card p-4">
              <img src={serviceImg3} alt="" className="img-fluid mb-3" />
              <h4 className="mt-3 mb-1">Online Support</h4>
              <p className="text-muted fs-6 fw-semibold">
                24 hours a day, 7 days a week
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="service-card p-4">
              <img src={serviceImg4} alt="" className="img-fluid mb-3" />
              <h4 className="mt-3 mb-1">Flexible Payment</h4>
              <p className="text-muted fs-6 fw-semibold">
                Pay with Multiple Credit Cards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seen in */}
      <div className="text-center my-5 seen-in">
        <div className="container">
          <h1 className="mb-5 fw-semibold">As seen in</h1>
          <div className="row pt-3 justify-content-center">
            <div className="col-md mb-4 seen-card">
              <img src={brand1} alt="" className="img-fluid" />
              <p className="text-dark fs-5 mt-2 fw-semibold">
                "Also the customer service is phenomenal. I would purchase again"
              </p>
            </div>

            <div className="col-md mb-4 seen-card">
              <img src={brand2} alt="" className="img-fluid" />
              <p className="text-dark fs-5 mt-2 fw-semibold">
                "Great product line. Very attentive staff to deal with."
              </p>
            </div>

            <div className="col-md mb-4 seen-card">
              <img src={brand3} alt="" className="img-fluid" />
              <p className="text-dark fs-5 mt-2 fw-semibold">
                "Are you looking for your beauty at an affordable price? Look no
                further..."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Favourite Beauty Section */}
      <div className="favourite-beauty py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="section-title mb-5 text-center">
              <h2 className="fw-semibold">
                Customer Favorite Beauty Essentials
              </h2>
              <p>
                Made using clean, non-toxic ingredients, our products are
                designed for everyone.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5">
              <div className="favourite-beauty-banner mb-lg-0 mb-5 position-relative">
                <img
                  src={femalebanner}
                  alt="Female Banner"
                  className="img-fluid rounded"
                />
                <div className="favourite-beauty-banner-title position-absolute p-3">
                  <h3 className="fs-2 fw-bold">Empower Yourself</h3>
                  <p className="fs-6">Get the skin you want to feel</p>
                  <button className="btn btn-dark mt-2">Shop Now</button>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row g-4">
                {Products.slice(0, 4).map((product) => (
                  <div className="col-md-6" key={product.id}>
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

                      <Link
                        to={`/product/${product.id}`}
                        className="text-decoration-none text-black"
                      >
                        <div className="product-content pt-3">
                          <span className="price d-block fw-bold">
                            {product.price}
                          </span>
                          <h3 className="title pt-1 fs-5">
                            {product.Prdurctname}
                          </h3>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discover */}
      <div className="discover container">
        <div className="section-title mb-5 favorite-beauty-title text-center">
          <h2>Discover Our Bundles</h2>
          <p>
            Our bundles were designed to conveniently package <br />
            your tanning essentials while saving you money
          </p>
        </div>

        <div className="discover-card text-center">
          <div className="discover-img section-image rounded">
            <img
              src={discoverl}
              alt="Summer Collection"
              className="img-fluid rounded"
            />
          </div>
          <div className="discover-info mt-3">
            <div>Summer Collection</div>
            <button className="btn mt-2">
              Shop Now <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>

        <div className="discover-card text-center">
          <div className="discover-img section-image rounded">
            <img
              src={discover2}
              alt="From Our Blog"
              className="img-fluid rounded"
            />
          </div>
          <div className="discover-info mt-3">
            <div>From Our Blog</div>
            <button className="btn mt-2">
              Read More <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Social Images */}
      <div className="social-image-container py-5 px-5 mx-auto">
        <div className="row g-4">
          {[socialImage1, socialImage2, socialImage3, socialImage4, socialImage5, socialImage4, socialImage5, socialImage1, socialImage3, socialImage1, socialImage4, socialImage5].map(
            (img, idx) => (
              <div className="col-lg-2 col-md-4" key={idx}>
                <div className="social-wrapper position-relative overflow-hidden">
                  <img src={img} alt="" className="img-fluid" />
                  <i className="bi bi-instagram"></i>
                </div>
              </div>
            )
          )}
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

export default Index;
