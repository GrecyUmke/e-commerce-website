import React from "react";
import Link from "next/link";

function ItemsBar() {
    return(
        <div class="container fluid">
            <ul className="itembar p:0">
                <div><h4>Shoes</h4></div>
                    <a href="/Shoes">
                        <div className="nav justify-content-end">Explore</div>
                    </a>
                <div className="row " style={{width:"100%"}}>  
                    <div className="col-sm-2" style={{width:"316px",height:"403px"}}>
                            <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/a/p/9-axe-white-9-hotstyle-white-original-imagthgrt9ae7g4x.jpeg?q=70"  class="img-fluid"style={{width:"315px",height:"300px"}}></img>
                            <b><h4>Product Name</h4></b>
                            <img src="rating.png"/>
                            <img src="Rs.699.png" style={{height:"20px",marginLeft:"50px"}}/> 
                            <img src="Go.svg" style={{marginLeft:"16px"}}/>   
                    </div>
                    <div className="col-sm-2 " style={{width:"316px",height:"403px"}}>
                        <img src="https://img3.junaroad.com/uiproducts/19720587/pri_175_p-1681889786.jpg"  class="img-fluid"style={{width:"315px",height:"300px"}}></img>
                        <b><h4>Product Name</h4></b>
                        <img src="rating.png"/>
                        <img src="Rs.699.png" style={{height:"20px",marginLeft:"50px"}}/> 
                        <img src="Go.svg" style={{marginLeft:"16px"}}/>  
                    </div>
                    <div className="col-sm-2 " style={{width:"316px",height:"403px"}}>
                        <img src="https://www.campusshoes.com/cdn/shop/products/RAISE_22L-129_ANGLFALS-MUNLT.jpg?v=1670325436"  class="img-fluid"style={{width:"315px",height:"300px"}}></img>
                        <b><h4>Product Name</h4></b>
                        <img src="rating.png"/>
                        <img src="Rs.699.png" style={{height:"20px",marginLeft:"50px"}}/> 
                        <img src="Go.svg" style={{marginLeft:"16px"}}/>  
                    </div>
                    <div className="col-sm-2" style={{width:"316px",height:"403px"}}>
                        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/n/l/5/-original-imaggkz4dxarymrs.jpeg?q=90"  class="img-fluid"style={{width:"315px",height:"300px"}}></img>
                        <b><h4>Product Name</h4></b>
                        <img src="rating.png"/>
                        <img src="Rs.699.png" style={{height:"20px",marginLeft:"50px"}}/> 
                        <img src="Go.svg" style={{marginLeft:"16px"}}/>  
                    </div>
                    {/* <div className="col-sm-2" style={{width:"305px",height:"403px"}}>
                        <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18274390/2022/5/14/c64644f6-840f-4496-bb42-19359e9881771652523841987RoadsterMenBrownTexturedPUSneakers1.jpg"  class="img-fluid"style={{width:"270px",height:"247px"}}></img>
                    </div> */}
                    {/* <div className="col-sm-2" style={{width:"210.3px",height:"250px"}}>
                        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/j/u/g/-original-imaghrbyhgp8xxgd.jpeg?q=20"  class="img-fluid"style={{width:"270px",height:"247px"}}></img>
                    </div> */}
                </div>
            </ul>
            
        </div>
    )
}
export default ItemsBar;
