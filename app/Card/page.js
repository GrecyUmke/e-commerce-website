import "./style.css";
const Card =()=>{
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10 col-11 mx-auto">
                    <div class="row mt-5 gx-3">
                        <div class="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                            <div class="cart p-4">
                                <h2 class="py-4 font-weight-bold">Cart (2 items)</h2>
                                <div class="row">
                                    <div class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                                        <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/a/p/9-axe-white-9-hotstyle-white-original-imagthgrt9ae7g4x.jpeg?q=70" class="img-fluid" alt="cart img"></img>
                                    </div>

                                    <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                                        <div class="row">
                                            <div class="col-6 cart-title">
                                                <h1 class="mb-4 product_name">Shoes</h1>
                                                <p class="mb-2">Shoes - White</p>
                                                <p class="mb-2">Color: White</p>
                                                <p class="mb-3">Size: M</p>
                                            </div>

                                            <div class="col-6">
                                                <ul class="pagination justify-content-end set_quantity">
                                                    <li class="page-item">
                                                        <button class="page-link"><i class="fas fa-minys"></i>-</button>
                                                    </li>
                                                    <li class="page-item"><input type="text" name="" class="page-link" value="1" id="textbox"></input></li>
                                                    <li class="page-item">
                                                        <button class="page-link"><i class="fas fa-plus"></i>+</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-8 d-flex justify-content-between remove_wish">
                                                <p><i class="fas fa-trash-alt"></i> REMOVE ITEM</p>
                                                <p><i class="fas fa-heart"></i>MOVE TO WISH LIST</p>
                                            </div>
                                            <div class="col-4 d-flex justify-content-end price_money">
                                                <h3>$<span id="itemval">0.00</span></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div class="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                            <div class="right_side p-3 shadow bg-white">
                                <h2 class="product_name mb-5">The Total Amount Of</h2>
                                <div class="price_indiv d-flex justify-content-between">
                                    <p>Product Amount</p>
                                    <p>$<span>0.00</span></p>
                                </div>
                                <div class="price_indiv d-flex justify-content-between">
                                    <p>Shipping Charge</p>
                                    <p>$50.0</p>
                                </div>
                                <hr />
                                <div class="total-amt d-flex justify-content-between font-weight-bold">
                                    <p>The total amount of (including VAT)</p>
                                    <p>$<span class="total_cart_amt">0.00</span></p>
                                </div>
                                <button class="btn btn-primary text-uppercase">Checkout</button>
                            </div>
                        </div> 

                    </div>

                </div>

            </div>
            <div class="col-lg-10 border box_1 border-dark d-flex flex-column">Recommendations
                <div class="col-12 border box_2 border-dark d-flex flex-row justify-content-around flex-wrap">
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box1">
                        <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box-1"></div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box1">
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box-1"></div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box1">
                        <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box-1"></div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box1">
                        <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;

