import React from "react";
import Link from "next/link";
function SlideBar() {
    return(
        <div class="container fluid">
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/66e64fae2bbd6da4.jpg?q=20" class="d-block w-100" alt="first image"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b8e07ff39439d998.jpg?q=20" class="d-block w-100" alt="secoond image"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8773e89ba72303d6.jpg?q=20" class="d-block w-100" alt="thrid image"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7308a7338452882f.jpg?q=20" class="d-block w-100" alt="fourth image"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    )
}
export default SlideBar;