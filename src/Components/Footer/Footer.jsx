import React from "react";


import payment1 from './../../assets/payment-1.svg'
import payment2 from './../../assets/payment-2.svg'
import payment3 from './../../assets/payment-3.svg'
import payment4 from './../../assets/payment-4.svg'
import payment5 from './../../assets/payment-5.svg'
import payment6 from './../../assets/payment-6.svg'



const Footer = () => {
  return (
    <>
      <div className="footer mt-5 py-5">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-4">
                  <h3 className="mb-3">Company</h3>
                  <p className="mb-0">Find a location nearest </p>
                  <p className="mb-4">
                    A location nearest you. See <strong>Our Stores</strong>
                  </p>
                  <p className="mb-2">
                    <strong>📞 01794985731</strong>
                  </p>
                  <p className="mb-0">✉️ mdtohid232020.com</p>
                </div>


                <div className="col-md-4">
                  <h3 className="mb-3">Useful Links</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none">
                        New Products
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none">
                        Best Sellers
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none">
                        Special Offers
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none">
                        Online Gift Card
                      </a>
                    </li>

                    <li className="mb-2">
                      <a href="#" className="text-decoration-none">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>



                 <div className="col-md-4">
                  <h3 className="mb-3">Information </h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none">
                       - Start A Return
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none">
                         - Contact Us
                      </a>
                    </li>
                    
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none">
                       - Shipping FAQ
                      </a>
                    </li>

                    <li className="mb-2">
                      <a href="#" className="text-decoration-none">
                        - Terms & Conditions
                      </a>
                    </li>
                    <li className="mb-2">

                     <a href="#" className="text-decoration-none">
                       - Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>




            <div className="col-lg-4">
                <h3 className="mb-4">Good Emails</h3>
                <p className="mb-5">Enter your email below to be the first and product launches</p>

                <div className="subscribe-box d-flex">
                    <input type="email "  className="form-control" placeholder="Enter Your email address"/>

                    <button className="btn">Subscribe</button>
                </div>
            </div>
          </div>



<div className="footer-bottom mt-5">
  <div className="container">
    <div className="row align-items-center text-center text-lg-start">
      
      {/* Left: Social Icons */}
      <div className="col-lg-4 mb-3 mb-lg-0">
        <div className="footer-social d-flex justify-content-center justify-content-lg-start gap-3">
          <i className="ri-instagram-line"></i>
          <i className="ri-twitter-x-line"></i>
          <i className="ri-facebook-circle-fill"></i>
          <i className="ri-youtube-fill"></i>
        </div>
        <p className="mt-2 mb-0 small">Glowing 2025 | Powered by Shopify</p>
      </div>

      {/* Center: Logo */}
      <div className="col-lg-4 mb-3 mb-lg-0">
        <div className="footer-logo text-center">
          <a href="#" className="navbar-brand mx-auto">
            <h2 className="fw-bold mb-0" style={{ letterSpacing: '2px' }}>
              BLUSHIFY
            </h2>
          </a>
        </div>
      </div>

      {/* Right: Payment Methods */}
      <div className="col-lg-4">
        <div className="payment-img d-flex justify-content-center justify-content-lg-end gap-2">
          <img src={payment1} alt="" className="img-fluid" />
          <img src={payment2} alt="" className="img-fluid" />
          <img src={payment3} alt="" className="img-fluid" />
          <img src={payment4} alt="" className="img-fluid" />
          <img src={payment5} alt="" className="img-fluid" />
          <img src={payment6} alt="" className="img-fluid" />
        </div>
      </div>

    </div>
  </div>
</div>






        </div>
      </div>
    </>
  );
};

export default Footer;
