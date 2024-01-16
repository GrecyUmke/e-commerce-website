import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const Navbar = () => {
  return (
    <>
      <body>
        <div class="main-navbar shadow-sm sticky-top">
          <div class="top-navbar">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                  <h5 class="brand-name">Orders page</h5>
                </div>
                <div class="col-md-5 my-auto">
                  <form role="search">
                    <div class="input-group">
                      <input type="search" placeholder="Search your product" className="col-sm-11 searchbar" />
                      <button class="btn bg-white col-sm-1 clickbutton " type="submit">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="col-md-5 my-auto">
                  <ul class="nav justify-content-end">

                    <li class="nav-item">
                      <a class="nav-link" href="/cart">
                        <i class="fa fa-shopping-cart"></i> Cart (0)
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/placeOrder">
                        <i class="fa fa-heart"></i> Orders
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-user"></i> Username
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="/profile"><i class="fa fa-user"></i> Profile</a></li>

                        <li><a class="dropdown-item" href="/placeOrder"><i class="fa fa-list"></i> My Orders</a></li>
                        <li><a class="dropdown-item" href="/my_wishlist"><i class="fa fa-heart"></i> My Wishlist</a></li>
                        <li><a class="dropdown-item" href="/cart"><i class="fa fa-shopping-cart"></i> My Cart</a></li>
                        <li><a class="dropdown-item" href="/logout"><i class="fa fa-sign-out"></i> Logout</a></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/login">
                        <i class="fa fa-heart"></i> Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
                E-Commerce
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="/about">All Categories</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/sell">Sell</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/mens_collection">Men's Collection</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/womens_collection">Women's Collection</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/electronic">Electronics</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
      </body>
      <h1>Orders page</h1>
    </>
  );
};

export default Navbar;






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
            <div class="col-lg-2 col-md-4 col-sm-6 col-12 border border-dark box-1">
                <img src="https://atlas-content-cdn.pixelsquid.com/stock-images/school-chair-ENAk6N7-600.jpg" style={{height:"304px"}}></img>
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