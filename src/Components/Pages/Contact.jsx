import React from "react";

const Contact = () => {
  return (
    <>
      {/* ===== Contact Info Section ===== */}
      <section className="contact-section mt-5">
        <div className="container">
          <h2 className="section-title">Keep In Touch With Us</h2>
          <p className="section-subtitle">
            Be the first to know about new skincare launches, exclusive offers,
            and <br />
            expert beauty tips for radiant skin.
          </p>

          <div className="row">
            {/* Address Card */}
            <div className="contact-col">
              <div className="contact-box bg-transparent border-0">
                <i className="ri-map-pin-line icon"></i>
                <h5>Address</h5>
                <p>Rendom IT Solutions, 2nd Floor, Siddharth Complex,</p>
                <p className="mb-4">Alkapuri, Vadodara, Rajshahi - 390007</p>
                <a
                  href="https://maps.app.goo.gl/2XwiSp3Jk3V6FCg4A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Get Direction
                </a>
              </div>
            </div>

            {/* Contact Card */}
            <div className="contact-col">
              <div className="contact-box bg-transparent border-0">
                <i className="ri-phone-line icon"></i>
                <h5>Contact</h5>
                <p>
                  <strong>Mobile:</strong> 01316884689
                </p>
                <p>
                  <strong>Hotline:</strong> 01794985731
                </p>
                <p>
                  <strong>E-mail:</strong> mdtohid232020@gmail.com
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="contact-col">
              <div className="contact-box bg-transparent border-0">
                <i className="ri-time-line icon"></i>
                <h5>Hours of Operation</h5>
                <p>
                  <strong>Mon - Fri:</strong> 09:30 - 21:00
                </p>
                <p>
                  <strong>Sat - Sun:</strong> 10:30 - 22:45
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Google Map Section ===== */}
      <div className="contact-page">
        <section className="map-section container">
          <iframe
            title="Our Location"
            className="map rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58144.787229144335!2d88.60616015!3d24.37959175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa96a38d031%3A0x10f93a950ed6f410!2z4Kaw4Ka-4Kac4Ka24Ka-4Ka54KeA!5e0!3m2!1sbn!2sbd!4v1759229654922!5m2!1sbn!2sbd"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      </div>

      {/* ===== Contact Form Section ===== */}
      <section className="message-section container mt-5">
        <h2 className="form-title">Send A Message</h2>
        <form className="contact-form">
          <div className="row">
            <input type="text" placeholder="Name" className="input" />
            <input type="email" placeholder="Email" className="input" />
          </div>
          <div className="row">
            <textarea placeholder="Message" className="textarea"></textarea>
          </div>
          <button type="submit" className="btn px-5">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
