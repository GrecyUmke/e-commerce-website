import React from 'react';
import "./page.css"
const Explore= () => {
    return (
      <>
        <div className="container" style={{width:"1280px"}}>
          <div className='row' style={{height:"143px",backgroundColor:"#3F0DA9"}}>
              <div className='col mt-4 mx-5' style={{height:"83px",color:"#FBE9A9"}}>
                  <h1 className='inika-style'>Category / Product Name</h1>
                  <p className='font-weight-bold'>Crafted Elegance: Artisanal Wooden Furniture</p>
              </div>
          </div>
          <div className='col-2 mt-3 border border-dark sort'>
              <p>Sort By: Name A--Z</p>
          </div>
          <div className='row'>
            <div className='col-2 mt-4 border border-dark' style={{height:"824px"}}>
            <div className='col-12 border-bottom border-dark mt-3' style={{height:"200px"}}>
                <img src="Frame 146.png" style={{width:"200px", marginBottom:"16px"}}></img>
                <h5>Select Border</h5>
                <img src="Frame 145.png" style={{marginTop:"16px"}}></img> 
            </div>
            <div className='col-12 border-bottom border-dark mt-3' style={{height:"250px"}}>
                <h5>Select Star Rating</h5>
                <div>
                    <img src="Frame 37.png"></img>
                </div>
                <div>
                    <img src="Frame 48.png" style={{marginTop:"16px"}}></img>
                </div>
                <div>
                    <img src="Frame 40.png" style={{marginTop:"16px"}}></img>
                </div>
                <div>
                    <img src="Frame 49.png" style={{marginTop:"16px"}}></img>
                </div>
                <div>
                    <img src="Frame 50.png" style={{marginTop:"16px"}}></img>
                </div>
            </div>
            <div className='col-12 border-bottom border-dark mt-3' style={{height:"250px"}}>
                <img src="Frame 150.png"></img>
            </div>
            </div>
              <div className='col-10 mt-4 border border-dark' style={{height:"1020px"}}>
                <div class="col-12 border box_2 border-dark d-flex flex-row justify-content-around flex-wrap">
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box1">
                        <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box-1">
                            <img src="https://atlas-content-cdn.pixelsquid.com/stock-images/school-chair-ENAk6N7-600.jpg" style={{height:"303px"}}></img>
                        </div>
                        <div class="col-5 border border-dark">Product Name</div>
                        <div class="col-5 border border-dark star">star</div>
                        <div class="col-5 border border-dark price">price</div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box1">
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box-1">
                        <img></img>
                    </div>
                        <div class="col-5 border border-dark">Product Name</div>
                        <div class="col-5 border border-dark star">star</div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box1">
                        <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box-1">
                            <img></img>
                        </div>
                        <div class="col-5 border border-dark">Product Name</div>
                        <div class="col-5 border border-dark star">star</div>
                    </div>
                    
                </div>
                <div class="col-12 border box_2 border-dark d-flex flex-row justify-content-around flex-wrap">
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box1">
                        <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box-1">
                            <img src="https://atlas-content-cdn.pixelsquid.com/stock-images/school-chair-ENAk6N7-600.jpg" style={{height:"303px"}}></img>
                        </div>
                        <div class="col-5 border border-dark">Product Name</div>
                        <div class="col-5 border border-dark star">star</div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box1">
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box-1">
                        <img></img>
                    </div>
                        <div class="col-5 border border-dark">Product Name</div>
                        <div class="col-5 border border-dark star">star</div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box1">
                        <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box-1">
                            <img></img>
                        </div>
                        <div class="col-5 border border-dark">Product Name</div>
                        <div class="col-5 border border-dark star">star</div>
                    </div>
                    
                </div>
            </div>
          </div>
          <div className='col-10 mt-4' style={{heigh:"1750px"}}>
          </div>
        </div>
      </>
    );
  };
  
  export default Explore;


