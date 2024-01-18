"use client"
import React, { useState } from 'react';
import NavBar from "../NavBar";


const orderDone = () => {
  return (
    <div className="container" style={{width:"1670px"}}>
      <NavBar/>
      <div className='col mt-4 mx-5 nav justify-content-center ' style={{height:"83px",color:"black"}}>
          <img src="done.png"></img>
      </div>
      <div className='col mt-4 mx-5 nav justify-content-center ' style={{height:"83px",color:"black"}}>
        <h1 className='font-weight-bold'>Order Successfully Placed</h1>
      </div>
      <div className='col mt-4 mx-5 nav justify-content-center' style={{color:"black"}}>
        <b><h2 className="nav justify-content-center" style={{width:"445px",height:"102px",color:"black"}}>Track Details on your email-id mailid@gamil.com</h2></b>
      </div>
      <div className='nav justify-content-center' style={{width:"370px",background:"#3F0DA9",color:"white",marginLeft:"430px",marginBottom:"200px",marginTop:"100px"}}>
        <h3>Continue Shopping
            <img src="Go.png" style={{marginLeft:"30px"}}/>
        </h3>
      </div>
      <div className='row'>
      </div>
    </div>

  );
};
export default orderDone;
