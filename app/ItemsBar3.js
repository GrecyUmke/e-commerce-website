import React from "react";
import Link from "next/link";

function ItemsBar3() {
    return(
        <div class="container fluid">
            <ul className="itembar">
            <div><h4>Watch</h4></div>
                <a href="/Shoes">
                    <div className="nav justify-content-end">Explore</div>
                </a> 
            <div className="row" style={{width:"100%" , height:"405px"}}>
                <div className="col-sm-2" style={{width:"316px",height:"405px"}}>
                    <img src="https://www.reliancedigital.in/medias/Noise-Mettle-Smart-Watch-493838766-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODczOHxpbWFnZS9qcGVnfGltYWdlcy9oYWUvaDUzLzEwMDI3ODIwNTgwODk0LmpwZ3wyMTBmNGJlNWIwMDczMmY5ZmRkNTEyNjczMDFkYjIxNjU1N2E2NTY4NDU3OTIxYzQ5ZjFjNWFiMjc2MmE1MGVk&w=206&h=206"  class="img-fluid"style={{width:"316px",height:"300px"}}></img>
                    <b><h4>Product Name</h4></b>
                    <img src="rating.png"/>
                    <img src="Rs.699.png" style={{height:"20px",marginLeft:"50px"}}/> 
                    <img src="Go.svg" style={{marginLeft:"16px"}}/>    
                </div>
                <div className="col-sm-2" style={{width:"316px",height:"405px"}}>
                    <img src="https://media.casioindiashop.com/assets/images/pair-watch-tile.webp"  class="img-fluid"style={{width:"316px",height:"300px"}}></img>
                    <b><h4>Product Name</h4></b>
                    <img src="rating.png"/>
                    <img src="Rs.699.png" style={{height:"20px",marginLeft:"50px"}}/> 
                    <img src="Go.svg" style={{marginLeft:"16px"}}/> 
                </div>
                <div className="col-sm-2" style={{width:"316px",height:"405px"}}>
                    <img src="https://cdn1.smartprix.com/rx-iW3MXV8NS-w420-h420/zte-nubia-watch.jpg"  class="img-fluid"style={{width:"316px",height:"300px"}}></img>
                    <b><h4>Product Name</h4></b>
                    <img src="rating.png"/>
                    <img src="Rs.699.png" style={{height:"20px",marginLeft:"50px"}}/> 
                    <img src="Go.svg" style={{marginLeft:"16px"}}/> 
                </div>
                <div className="col-sm-2" style={{width:"316px",height:"405px"}}>
                    <img src="https://staticimg.titan.co.in/Titan/Catalog/2693WM01_1.jpg"  class="img-fluid"style={{width:"316px",height:"300px"}}></img>
                    <b><h4>Product Name</h4></b>
                    <img src="rating.png"/>
                    <img src="Rs.699.png" style={{height:"20px",marginLeft:"50px"}}/> 
                    <img src="Go.svg" style={{marginLeft:"16px"}}/> 
                </div>
                {/* <div className="col-sm-2" style={{width:"194.4px",height:"250px"}}>
                    <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/p/e/q/-original-imagrdzfjy92rbgg.jpeg?q=20"  class="img-fluid"style={{width:"270px",height:"247px"}}></img>
                </div>
                <div className="col-sm-2" style={{width:"194.4px",height:"250px"}}>
                    <img src="https://www.leafstudios.in/cdn/shop/products/Main_e5e71878-90d3-4817-9dd3-1d81e343afea_grande.jpg?v=1671601920"  class="img-fluid"style={{width:"270px",height:"247px"}}></img>
                </div> */}
            </div>
            </ul>
            
        </div>
    )
}
export default ItemsBar3;
