import React from "react";
import Link from "next/link";

function ItemsBar2() {
    return(
        <div class="container fluid">
            <ul className="itembar">
            <div><h4>Smartphones</h4></div> 
                <a href="/Shoes">
                    <div className="nav justify-content-end">Explore</div>
                </a>
            <div className="row" style={{width:"100%"}}>
                <div className="col-sm-2" style={{width:"316px",height:"405px"}}>
                    <img src="https://asset.conrad.com/media10/isa/160267/c1/-/en/002757643PI00/image.jpg?x=400&y=400&format=jpg&ex=400&ey=400&align=center"  class="img-fluid"style={{width:"316px",height:"300px"}}></img> 
                    <b><h4>Product Name</h4></b>
                    <img src="rating.png"/>
                    <img src="Rs.699.png" style={{height:"20px",marginLeft:"50px"}}/> 
                    <img src="Go.svg" style={{marginLeft:"16px"}}/>   
                </div>
                <div className="col-sm-2" style={{width:"316px",height:"405px"}}>
                    <img src="https://www.91-img.com/pictures/143993-v4-apple-iphone-14-mobile-phone-large-4.jpg"  class="img-fluid"style={{width:"316px",height:"300px"}}></img>
                    <b><h4>Product Name</h4></b>
                    <img src="rating.png"/>
                    <img src="Rs.699.png" style={{height:"20px",marginLeft:"50px"}}/> 
                    <img src="Go.svg" style={{marginLeft:"16px"}}/>  
                </div>
                <div className="col-sm-2" style={{width:"316px",height:"405px"}}>
                    <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202302/15/SrtL7TwcCqYXBAln.png"  class="img-fluid"style={{width:"316px",height:"300px"}}></img>
                    <b><h4>Product Name</h4></b>
                    <img src="rating.png"/>
                    <img src="Rs.699.png" style={{height:"20px",marginLeft:"50px"}}/> 
                    <img src="Go.svg" style={{marginLeft:"16px"}}/>  
                </div>
                <div className="col-sm-2" style={{width:"315px",height:"405px"}}>
                    <img src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno8-pro-5g-en/navigation/reno8-pro-glazed-black-427_600-pc.png.thumb.webp"  class="img-fluid"style={{width:"316px",height:"300px"}}></img>
                    <b><h4>Product Name</h4></b>
                    <img src="rating.png"/>
                    <img src="Rs.699.png" style={{height:"20px",marginLeft:"50px"}}/> 
                    <img src="Go.svg" style={{marginLeft:"16px"}}/>  
                </div>
                {/* <div className="col-sm-2" style={{width:"194.4px",height:"250px"}}>
                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1662579991-iphone-14-pro-1662579961.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=980:*"  class="img-fluid"style={{width:"270px",height:"247px"}}></img>  
                </div> */}
                {/* <div className="col-sm-2" style={{width:"194.4px",height:"250px"}}>
                    <img src="https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UF1000,1000_QL80_.jpg"  class="img-fluid"style={{width:"270px",height:"247px"}}></img> 
                </div> */}
            </div>
            </ul>
            
        </div>
    )
}
export default ItemsBar2;
