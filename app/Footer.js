import React from "react";

function Footer() {
    return(
        <div class="container fluid">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                    <a class="page-link">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
            <div class="text-center">
                <div class="card bg-dark" style={{width:"100%",height:"350px"}}>
                <div class="container-fluid footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <h5 class="footer-heading text-white">ABOUT</h5>
                                <ul class="list-unstyled">
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Return Policy</a></li>
                                    <li><a href="#">E-Gift Vouchers</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <h5 class="footer-heading text-white">POLICY</h5>
                                <ul class="list-unstyled">
                                    <li><a href="#">Return Policy</a></li>
                                    <li><a href="#">Terms Of Use</a></li>
                                    <li><a href="#">Security</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <h5 class="footer-heading text-white">SOCIAL</h5>
                                <ul class="list-unstyled">
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">YouTube</a></li>
                                    <li><a href="#">Instagram</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <h5 class="footer-heading text-white">HELP</h5>
                                <ul class="list-unstyled">
                                    <li><a href="#">Payments</a></li>
                                    <li><a href="#">Shopping</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Report Infringement</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>    
        </div>
    )
}
export default Footer;
