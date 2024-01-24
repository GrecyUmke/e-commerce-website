import NavBar from "../NavBar";
import React from 'react';
import './add.css'

const AddToCart = () => {
  return (
    <div className="container">
      <NavBar/>
        <div class="container ">
            <div class="row">
                <div class="col-6 mt-5 item">
                    <img className=""src="Rectangle 26.png" style={{width: "450px"}}></img>
                </div>    
                <div class="col-3 border add1">
                  <h4 class="itemName1">Category / Furniture</h4>
                  <h2 class="itemName2">Chair Wood</h2>
                  <img src="Frame 141.png"></img>
                  <h6 claa="itemName3">To prevent surface scratches and the sound of chair legs scraping on the floor, complete with FIXA self-adhesive floor protectors, sold separately.</h6>
                  <div class="itemName4">RS.750</div>
                </div>
                <div className=' button1 d-flex align-items-center justify-content-center'>
                  <button type="submit">Add To Cart</button>
                </div>
                  <div class=" my-5 border border-dark productCo">
                    <div className="col-3 product1 border">Recommendations</div>
                    <div className="row  product2 border">
                      <div class="col-3 border border-dark">
                        <div class="col star">
                          <img src="Frame 141.png"></img>
                        </div>
                      </div>
                      <div class="col-3 border border-dark">
                        <div class="col star">
                          <img src="Frame 141.png"></img>
                        </div>
                      </div>
                      <div class="col-3 border border-dark">
                        <div class="col star">
                          <img src="Frame 141.png"></img>
                        </div>
                      </div>
                      <div class="col-3 border border-dark">
                        <div class="col star">
                          <img src="Frame 141.png"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    </div>
  );
};
export default AddToCart;