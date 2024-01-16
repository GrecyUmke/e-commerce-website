import React from 'react';
import Link from 'next/link';
function NavBar() {
  return (
    <div class="container fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand">
          <img src="shopping_cart .png" class="img-fluid"/>
        </a>
        <a className="navbar-brand">
          <img src="style.png" class="img-fluid" style={{ marginLeft: "28px"}}/>
        </a>
        <a className="navbar-brand" >
          <img src="home.png" class="img-fluid" style={{ marginLeft: "28px"}}/>
        </a>
        <a className="navbar-brand">
          <img src="education.png" class="img-fluid" style={{ marginLeft: "28px"}}/>
        </a>
        <a className="navbar-brand">
          <img src="more.png" class="img-fluid" style={{ marginLeft: "28px"}}/>
        </a>
        <a className="navbar-brand">
          <img src="Search.png" class="img-fluid" style={{ marginLeft: "291px"}}/>
        </a>
        <a className="navbar" href="/Card">
          <img src="cart.png" class="img-fluid" style={{ marginLeft: "8px"}}/>
        </a>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-5">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" width="25px" height="40px" alt="cart" class='img-fluid'></img>
            <li className="nav-item">
              <a className="nav-link" href="Card">Cart</a>
            </li>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#men's item">MEN'S WEAR</a></li>
                <li><a className="dropdown-item" href="/womens_collection">WOMEN'S WEAR</a></li>
                <li><a className="dropdown-item" href="#shoes">SHOES</a></li>
                <li><a className="dropdown-item" href="#electronics">ELECTRONICS</a></li>
                <li><a className="dropdown-item" href="#toy's">TOY'S</a></li>
                <li><a className="dropdown-item" href="#watch">WATCH</a></li> */}
              {/* </ul> */}
            {/* </div> */}
          {/* </ul> */}
        {/* </div> */}
      </nav>
    </div>
  );
}

export default NavBar;



