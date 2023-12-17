import React from 'react';
import Link from 'next/link';
function NavBar() {
  return (
    <div class="container fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#" style={{marginRight:"30"}}>
          <img 
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" class="img-fluid"  
            style={{ marginRight: "80" }}
          />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="col-8">
              <form className="d-flex my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search for Products,Brands and More" aria-label="Search" />
                  <button className="btn-success my-2 my-sm-0" type="submit">Search</button>
              </form>
          </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                <li><a className="dropdown-item" href="#women's wear">WOMEN'S WEAR</a></li>
                <li><a className="dropdown-item" href="#shoes">SHOES</a></li>
                <li><a className="dropdown-item" href="#electronics">ELECTRONICS</a></li>
                <li><a className="dropdown-item" href="#toy's">TOY'S</a></li>
                <li><a className="dropdown-item" href="#watch">WATCH</a></li>
              </ul>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;



