import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid mt-5 mb-3">
            <div className="card bg-white shadow-sm">
                <div className="row mb-4">
                    <div className="col-md-4 col-sm-4 col-xs-4">
                        <div className="footer-text pull-left">
                            <div className="d-flex">
                                <h2 className="font-weight-bold mr-2 px-3"> SM </h2>
                                <h2 style={{ color: "#324AB2" }}>SwapMarketplace</h2>
                            </div>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.</p>
                            <div className="social mt-2 mb-3"> <i className="fa fa-facebook-official fa-lg"></i> <i className="fa fa-instagram fa-lg"></i> <i className="fa fa-twitter fa-lg"></i> <i className="fa fa-linkedin-square fa-lg"></i> <i className="fa fa-facebook"></i> </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2"></div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <h5 className="heading">Get to Know Us</h5>
                        <ul className="card-text">
                            <li>About Us</li>
                            <li>Help</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <h5 className="heading">Connect with Us</h5>
                        <ul className="card-text">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <h5 className="heading">Popular Locations</h5>
                        <ul className="card-text">
                            <li>Pune</li>
                            <li>Mumbai</li>
                            <li>Nagpur</li>
                            <li>Bangalore</li>
                        </ul>
                    </div>
                </div>
                <div className="divider mb-4"> </div>
                <div className="row" style={{ "font-size": "10px" }}>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="pull-left">
                            <p><i className="fa fa-copyright"></i> 2024 swapmarketplace</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="pull-right mr-4 d-flex policy">
                            <div>Terms of Use</div>
                            <div>Privacy Policy</div>
                            <div>Cookie Policy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
