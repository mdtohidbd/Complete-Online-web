import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    country: "Bangladesh",
    deliveryOption: "Ship",
  });

  const orderItems = [
    { name: "Enriched Hand Wash", price: 25 },
    { name: "Shield Spray", price: 37 },
    { name: "Nourishing Moisture Mask", price: 35 },
    { name: "Moisturizing Polishing Treatment", price: 45 },
  ];

  const subtotal = orderItems.reduce((acc, item) => acc + item.price, 0);
  const shipping = 0; // ফ্রি শিপিং
  const tax = +(subtotal * 0.1).toFixed(2);
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8">
        {/* ===== Left: Contact & Delivery ===== */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <input
            type="email"
            name="email"
            placeholder="Email or mobile phone number"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <h2 className="text-2xl font-bold">Delivery</h2>
          <div className="flex gap-4">
            <button
              type="button"
              className={`flex-1 p-3 border rounded-lg ${
                formData.deliveryOption === "Ship" ? "bg-black text-white" : ""
              }`}
              onClick={() =>
                setFormData({ ...formData, deliveryOption: "Ship" })
              }
            >
              Ship
            </button>
            <button
              type="button"
              className={`flex-1 p-3 border rounded-lg ${
                formData.deliveryOption === "Pickup"
                  ? "bg-black text-white"
                  : ""
              }`}
              onClick={() =>
                setFormData({ ...formData, deliveryOption: "Pickup" })
              }
            >
              Pickup in store
            </button>
          </div>

          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Vietnam">Vietnam</option>
          </select>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
            <input
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
          </div>

          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          <input
            name="apartment"
            placeholder="Apartment, suite, etc. (optional)"
            value={formData.apartment}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
            <input
              name="postalCode"
              placeholder="Postal code"
              value={formData.postalCode}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-800"
          >
            Place Order
          </button>
        </form>

        {/* ===== Right: Order Summary ===== */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-3">
            {orderItems.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
