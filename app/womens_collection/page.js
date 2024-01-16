import React from "react";
import "./women.css"
const Women_collection = () => {
  fetch("https://fakestoreapi.com/products").then(function (res) {
    console.log(res);
  });
  return (
      <>
          <div className="container-fluid px-5">
            <h2 className="mt-5">Women's Collection</h2>
            <div className="scrolling-wrapper row flex-row flex-nowrap">
              
              <div className="col-3">
                <div className="card card-block"></div>
              </div>
              <div className="col-3">
                <div className="card card-block"></div>
              </div>
              <div className="col-3">
                <div className="card card-block"></div>
              </div>
              <div className="col-3">
                <div className="card card-block"></div>
              </div>
              <div className="col-3">
                <div className="card card-block"></div>
              </div>
              <div className="col-3">
                <div className="card card-block"></div>
              </div>
              <div className="col-3">
                <div className="card card-block"></div>
              </div>
              <div className="col-3">
                <div className="card card-block"></div>
              </div>
              <div className="col-3">
                <div className="card card-block"></div>
              </div>
              <div className="col-3">
                <div className="card card-block"></div>
              </div>
            </div>
        </div>
      </>
    );
};

export default Women_collection;


























