import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Footer from "../components/footer";

class Home extends Component {
    render() {
        return (
            <div id="main" className="wrapper clear-top">
            <header className="masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                    <h1 className="mx-auto my-0 text-uppercase">Start Today, Start Now</h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">A hassle-free, seamless site uniquely specialised for fitness tracking</h2>
                    <Link to='/user/#createUser' className="btn btn-primary js-scroll-trigger">Get Started <i className="fas fa-running"></i></Link>
                    </div>
                </div>
            </header>
                <section className="contact-section bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Address</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50">4923 Market Street, Orchard FL</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Email</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Phone</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50">+65 9902-8832</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social d-flex justify-content-center">
                        <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
              <Footer />
            </div>
        )
    }
}

export default Home;

//<a class="btn btn-primary js-scroll-trigger" href="#createUser">Get Started</a>
