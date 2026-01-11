import React, { useState } from "react";

import head from "../../assets/about-head-shape.webp";
import about1 from "./../../assets/banner-female-2.webp";
import about2 from "../../assets/discover-1.webp";

import client1 from "../../assets/brand-logo-1.png";
import client2 from "../../assets/brand-logo-2.png";
import client3 from "../../assets/brand-logo-3.png";
import client4 from "../../assets/brand-logo-4.png";
import client5 from "../../assets/brand-logo-5.png";
import client6 from "../../assets/brand-logo-6.png";

import team1 from "../../assets/team-1.webp";
import team2 from "../../assets/team-2.webp";
import team3 from "../../assets/team-3.webp";

const About = () => {
  const [quote, setQuote] = useState(
    `Quality products at great prices, delivering the perfect mix of affordability and excellence.
   Each item ensures great value for money.`
  );

  return (
    <>
      {/* About Header Section */}
      <section className="about-header d-flex align-items-center">
        <div className="overlay"></div> {/* Dark overlay for better contrast */}
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-md-8 text-md-start text-center text-light">
              <p className="welcome small mb-2">
                Welcome to <span className="brand">Blushify</span>
              </p>
              <h1 className="fw-bold mb-3">About Our Brand</h1>
              <p className="lead">
                We believe beauty should be affordable, sustainable, and
                empowering. Our mission is to provide premium products that make
                you glow inside and out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*main about */}
      <section className="py-5">
        <div className="container text-center mb-5">
          <img src={head} alt="decorative leaf" />
          <h2 className="fw-bold">
            We strive to live with compassion, <br /> kindness and cmpathy
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            A lot of so-called stretch denim pants out there are just sweatpants
            they get baggy and lose their shape. Not cool. Our tightly knitted
            fabric holds its form after repeated wear. Plus, Aldays dress up or
            down, no prob. So you can wear them all day. Get it?
          </p>
        </div>

        {/*Face Image and description */}

        <div className="container mb-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 about-img1">
              <img src={about1} alt="Face" className="img-fluid rounded" />
            </div>
            <div className="col-md-5">
              <h4 className="fw-muted">
                Give your skin a healthy glow everyone•
              </h4>

              <p className="text-muted">
                Nourish your skin with radiant hydration. Our skincare
                essentials are crafted with premiu• ingredients to restore
                balance, enhance glow, and keep your complexion healthy every
                day. Experience the perfect blend Of nourishment and luxury for
                a naturally luminous look.
              </p>
            </div>
          </div>
        </div>

        {/*mission and Product Image */}

        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 mb-4 mb-md-0 about-img">
              <img src={about2} alt="Products" className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold">Our Mission</h4>
              <p className="text-muted">
                We believe in healthy, radiant skin for everyone. Our products
                are thoughtfully crafted with high-quality ingredients to
                nourish, protect, and enhance your natural glow—because
                confidence starts with great skin. Experience the perfect fusion
                of science and nature for skincare that truly transforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Client logos */}

      <section className="container-fluid bg-light">
        <div className="container py-5 text-center">
          <div className="mx-auto" style={{ maxWidth: "800px" }}>
            <p className="fs-4 mb-4 fw-bold">{quote}</p>
          </div>

          <div className="row justify-content-center align-items-center mt-5 gy-4">
            <div
              className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
              onClick={() =>
                setQuote(
                  "Quality products at great prices, delivering the perfect mix of affordability and excellence. Each item ensures great value for money."
                )
              }
              style={{ cursor: "pointer" }}
            >
              <img
                src={client1}
                alt="Goodness"
                className="img-fluid"
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </div>

            <div
              className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
              onClick={() =>
                setQuote(
                  "Quality products at great prices, delivering the perfect mix of affordability and excellence. Each item ensures great value for money."
                )
              }
              style={{ cursor: "pointer" }}
            >
              <img
                src={client2}
                alt="Goodness"
                className="img-fluid"
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </div>

            <div
              className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
              onClick={() =>
                setQuote(
                  "Quality products at great prices, delivering the perfect mix of affordability and excellence. Each item ensures great value for money."
                )
              }
              style={{ cursor: "pointer" }}
            >
              <img
                src={client3}
                alt="Grand Golden Gallery"
                className="img-fluid"
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </div>

            <div
              className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
              onClick={() =>
                setQuote(
                  "Quality products at great prices, delivering the perfect mix of affordability and excellence. Each item ensures great value for money."
                )
              }
              style={{ cursor: "pointer" }}
            >
              <img
                src={client4}
                alt="Goodness"
                className="img-fluid"
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </div>

            <div
              className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
              onClick={() =>
                setQuote(
                  "Quality products at great prices, delivering the perfect mix of affordability and excellence. Each item ensures great value for money."
                )
              }
              style={{ cursor: "pointer" }}
            >
              <img
                src={client5}
                alt="Goodness"
                className="img-fluid"
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </div>

            <div
              className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
              onClick={() =>
                setQuote(
                  "Quality products at great prices, delivering the perfect mix of affordability and excellence. Each item ensures great value for money."
                )
              }
              style={{ cursor: "pointer" }}
            >
              <img
                src={client6}
                alt="Goodness"
                className="img-fluid"
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/*Team Section */}
      <section className="team-section">
        <h2 className="team-title">
          We pride ourselves on having a team of highly skilled
        </h2>

        <div className="team-row">
          <div className="team-member">
            <div className="team-image-wrapper">
              <img src={team1} alt="Jennifer C." className="team-image" />
              <div className="team-social">
                <a href="#">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#">
                  <i className="ri-twitter-line"></i>
                </a>
                <a href="#">
                  <i className="ri-facebook-line"></i>
                </a>
                <a href="#">
                  <i className="ri-youtube-line"></i>
                </a>
              </div>
            </div>

            <h3 className="team-name">Slava Tohid</h3>
            <p className="team-role">Founder , Chief Creative</p>
          </div>

          <div className="team-member">
            <div className="team-image-wrapper">
              <img src={team2} alt="Jennifer C." className="team-image" />
              <div className="team-social">
                <a href="#">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#">
                  <i className="ri-twitter-line"></i>
                </a>
                <a href="#">
                  <i className="ri-facebook-line"></i>
                </a>
                <a href="#">
                  <i className="ri-youtube-line"></i>
                </a>
              </div>
            </div>

            <h3 className="team-name">Md Tohidul Islam. C</h3>
            <p className="team-role">Frontend Developer</p>
          </div>

          <div className="team-member">
            <div className="team-image-wrapper">
              <img src={team3} alt="Jennifer C." className="team-image" />
              <div className="team-social">
                <a href="#">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#">
                  <i className="ri-twitter-line"></i>
                </a>
                <a href="#">
                  <i className="ri-facebook-line"></i>
                </a>
                <a href="#">
                  <i className="ri-youtube-line"></i>
                </a>
              </div>
            </div>

            <h3 className="team-name">Md Tohidul Islam. C</h3>
            <p className="team-role">Frontend Developer</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
