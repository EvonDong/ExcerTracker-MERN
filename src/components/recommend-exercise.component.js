import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

export default class RecommendExercises extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section class="projects-section bg-light">
            <div class="container">
                <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="../assets/assets/img/bg-masthead.jpg" alt="" /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h3><b>Recommended Exercises</b></h3> <br></br>
                            <p class="text-black-50 mb-0">Struck on which exercise to embark on? <br></br> Fret not! A list of highly-rewarding, worthwhile exercises have been categorised for you!</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div class="col-lg-6"><img class="img-fluid" src="../assets/assets/img/demo-image-01.jpg" alt="" /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Strength Training</h4>
                                    <ul class="mb-0 text-white-50">
                                        <li><h5><Link to="/cycling" >Cycling</Link></h5></li>
                                        <li><h5><Link to="/dumbbell" >Dumbbell Biceps Curl</Link></h5></li>
                                    </ul>
                                    <hr class="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center no-gutters">
                    <div class="col-lg-6"><img class="img-fluid" src="../assets/assets/img/demo-image-02.jpg" alt="" /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Edurance Training</h4>
                                    <ul class="mb-0 text-white-50">
                                        <li><h5><Link to="/planks" >Planks</Link></h5></li>
                                    </ul>
                                    <hr class="d-none d-lg-block mb-0 mr-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <section class="signup-section" id="signup">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 col-lg-8 mx-auto text-center">
                                    <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                                    <h2 class="text-white mb-5">Subscribe to be updated about upcoming exercises!</h2>
                                    <form class="form-inline d-flex">
                                        <input class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email" placeholder="Enter email address..." />
                                        <button class="btn btn-primary mx-auto" type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        </section>
        )
    }
}




