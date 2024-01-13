import React from 'react';
import "./page.css"
const Explore= () => {
    return (
      <>
        <div className="container-fluid" style={{width:"1670px"}}>
          <div className='row' style={{height:"143px",backgroundColor:"#3F0DA9"}}>
              <div className='col mt-4 mx-5' style={{height:"83px",color:"#FBE9A9"}}>
                  <h1 className='inika-style'>Category / Product Name</h1>
                  <p className='font-weight-bold'>Crafted Elegance: Artisanal Wooden Furniture</p>
              </div>
          </div>
          <div className='col-2 mt-3 border border-dark'>
              <p>Sort By: Name A--Z</p>
          </div>
          <div className='row'>
            <div className='col-2 mt-4 border border-dark' style={{height:"824px"}}>
            <div className='col-12 border-bottom border-dark mt-3' style={{height:"168px"}}>
                <p>Select Border</p>
                <p>Nike</p>
                <p>Puma</p>
                <p>Reebok</p>
            </div>
            <div className='col-12 border-bottom border-dark mt-3' style={{height:"168px"}}>
                <p>Select Star Rating</p>
                <p>...$ Up</p>
                <p>...$ Up</p>
                <p>...$ Up</p>
            </div>
            <div className='col-12 border-bottom border-dark mt-3' style={{height:"168px"}}>
                <p>Select Prize Range</p>
                <p>Up to 200</p>
                <p>Up to 500</p>
                <p>Up to 700</p>
            </div>
            </div>
              <div className='col-10 mt-4 border border-dark' style={{height:"824px"}}>
                <p>CLEAR</p>
            </div>
          </div>
          <div className='col-10 mt-4' style={{heigh:"1750px"}}>
          </div>
        </div>
      </>
    );
  };
  
  export default Explore;


