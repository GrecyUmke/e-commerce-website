import React from "react";
import Link from "next/link";

function ItemsBar() {
    return(
        <div class="container fluid">
            <ul className="itembar mx-5 my-3 p:0">
            <div className="row border border-dark" style={{width:"100%",height:"250px"}}>
                <div className="col-sm-2 border border-dark" style={{width:"194.3px",height:"250px"}}>
                    <a className="grecy" href="/Shoes">
                        <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/a/p/9-axe-white-9-hotstyle-white-original-imagthgrt9ae7g4x.jpeg?q=70"  class="img-fluid"style={{width:"270px",height:"247px"}}></img>
                    </a>    
                </div>
                <div className="col-sm-2 border border-dark" style={{width:"194.3px",height:"250px"}}>
                    <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/k/v/i/1-7k2s7-globe-led-green-flozio-boys-girls-original-imaguz8z2pnyyky3.jpeg?q=70"  class="img-fluid"style={{width:"270px",height:"247px"}}></img>
                </div>
                <div className="col-sm-2 border border-dark" style={{width:"194.3px",height:"250px"}}>
                    <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/track-suit/w/c/w/xxl-colorblock-m7-by-metronaut-original-imagpxdgdhnashdh.jpeg?q=70"  class="img-fluid"style={{width:"270px",height:"247px"}}></img>
                </div>
                <div className="col-sm-2 border border-dark" style={{width:"194.333px",height:"250px"}}>
                    <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/top/m/o/n/s-zip-women-top-style-prezone-original-imagkfe6gbcebncv.jpeg?q=70"  class="img-fluid"style={{width:"270px",height:"247px"}}></img>
                </div>
                <div className="col-sm-2 border border-dark" style={{width:"194.4px",height:"250px"}}>
                    <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/projector/r/s/i/zeb-pixaplay-18-19-zeb-pixaplay-18-full-hd-zebronics-original-imagmgtm4nh4eueu.jpeg?q=70"  class="img-fluid"style={{width:"270px",height:"247px"}}></img>
                </div>
                <div className="col-sm-2 border border-dark" style={{width:"194.4px",height:"250px"}}>
                    <img src="https://rukminim2.flixcart.com/image/416/416/jz4g3gw0/stuffed-toy/c/m/u/91-cm-panda-89-009-teddy-bear-original-imafcuqqvuyzczsj.jpeg?q=70"  class="img-fluid"style={{width:"270px",height:"247px"}}></img>
                </div>
            </div>
            </ul>
        </div>
    )
}
export default ItemsBar;
