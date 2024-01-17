"use client"
import React, { useState } from 'react';
import NavBar from "../NavBar";
import './add.css'; 


const DeliveryDetailsForm = () => {
  return (
    <div className="container" style={{width:"1670px"}}>
      <NavBar/>
      <div className='row' style={{height:"143px",backgroundColor:"#3F0DA9"}}>
        <div className='col mt-4 mx-5' style={{height:"83px",color:"#FBE9A9"}}>
          <h1 className='inika-style'>Add Delivery Details</h1>
          <p className='font-weight-bold'>Add the details below.</p>
        </div>
      </div>
      <div>
        <div className="form-container">
          <form>
          <div className="form-group">
              <label>Your Email Address:</label>
              <p>All details of purchase, also tracking details will be sent here.</p>
              <input
                type="email"
                name="email"
               />
          </div>

          <div className="form-group">
            <label>Name of the Receiver:</label>
            <p>The delivery will be in this Name.</p>
            <input
              type="text"
              name="receiverName"
            />
          </div>

          <div className="form-group">
            <label>Contact Number of the Receiver:</label>
            <p>Your Delivery Guy may need this to contact you.</p>
            <input
              type="tel"
              name="contactNumber"
            />
          </div>

          <div className="form-group">
            <label>Delivery Address:</label>
            <p>The products will be delivered here in 15-20 days.</p>
            <label>Pin Code:</label>
            <input
              type="text"
              name="deliveryAddress"
            />
          </div>

          <div className="form-group">
            <label>Address (House no, Flat no, Street, Area):</label>
            <input
              type="text"
              name="address"
            />
          </div>

          <div className="form-group">
            <label>Town/City:</label>
            <input
              type="text"
              name="townCity"
            />
          </div>
          </form>
      </div>
      <div className='button1'>
        <button type="submit">Complete Purchase</button>
      </div>
    </div>
    </div>
  );
};
export default DeliveryDetailsForm;
