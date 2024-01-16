import "./style.css";
const Card =()=>{
    return(
    <div className="container-fluid" style={{width:"1670px"}}>
      <div className='row' style={{height:"143px",backgroundColor:"#3F0DA9"}}>
        <div className='col mt-4 mx-5' style={{height:"83px",color:"#FBE9A9"}}>
          <h1 className='inika-style'>MY CART</h1>
          <p className='font-weight-bold'>All the products you added to purchase appears here.</p>
        </div>
      </div>
      <div className="row border border-dark box1">
        <div className="col-3">
            <img src="Rectangle 26.png"></img>
        </div>
        <div className="col-9">
            <div class="row justify-content-between">
                <div class="col-4 item1">
                    <div class=" col itemName">Chair Wood</div>
                    <div class="col quantity">Quantity
                        <div class="col-4 rating">
                            <img src="Frame 160.png" className="like1" />
                            <img src="Frame 161.png" className="dislike1"/>
                        </div>
                    </div>
                    <div class="col remove">Remove</div>
                </div>
                <div class="col-4 rs">Rs.699</div>
            </div>

        </div>
      </div>


      <div className="row border border-dark box1">
        <div className="col-3">
            <img src="Rectangle 34.png"></img>
        </div>
        <div className="col-9">
            <div class="row justify-content-between">
                <div class="col-4 item1">
                    <div class=" col itemName">BOOK</div>
                    <div class="col quantity">Quantity
                        <div class="col-4 rating">
                            <img src="Frame 160.png" className="like1" />
                            <img src="Frame 161.png" className="dislike1"/>
                        </div>
                    </div>
                    <div class="col remove">Remove</div>
                </div>
                <div class="col-4 rs">Rs.699</div>
            </div>
        </div>
      </div>
        <div className='button1'>
            <button type="submit">Proceed to Buy</button>
        </div>

    </div>
    )
}
export default Card;

