"use client"
import React, { useState } from 'react';
import './s.css'; 


const DeliveryDetailsForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    receiverName: '',
    contactNumber: '',
    deliveryAddress: '',
    address: '',
    townCity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  return (
    <div className="delivery-form-container">
        <h2> Add Delivery Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Email Address:</label>
          All details of purchase, also tracking details will be send here.
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Name of the Receiver</label>
          The delivery will be in this Name
          <input
            type="text"
            name="receiverName"
            value={formData.receiverName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contact Number of the Receiver</label>
          TOur Delivery Guy may need this, to contact
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Delivery Address:</label>
          The products will be delivered here in 15- 20 days.
          <label>Pin Code:</label>
          <input
            type="text"
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address (House no, Flat no, Street, Area) </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Town/City:</label>
          <input
            type="text"
            name="townCity"
            value={formData.townCity}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Complete Purchase </button>
      </form>
    </div>
  );
};
export default DeliveryDetailsForm;
