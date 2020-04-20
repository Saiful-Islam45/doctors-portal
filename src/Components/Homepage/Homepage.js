import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';


const Homepage = () => {
    return (
        <div>
            <div id="main-home-page">
                <section class="main-home">
                    <div class="container-fluid pl-4">
                        <header>
                            <nav class="navbar navbar-expand-lg navbar-light" id="main-home-navbar">
                                <div class="collapse navbar-collapse " id="navbarNav">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link main-home-nav" href="#">Home <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link main-home-nav" href="#">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link main-home-nav" href="#">Dental Service</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link main-home-nav text-white" href="#">Reviews</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link main-home-nav text-white" href="#">Blog</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link main-home-nav text-white" href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <section class="header-content">
                                <div class="row">
                                    <div class="col-xl-5">
                                        <div class="sidebar-content">
                                            <h2 class="text-capitalize fwb">Your new smile <br /> starts here</h2>
                                            <p class="py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio
                                            consectetur quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!</p>
                                            <Link to="/avaliableAppoinments"><button type="button" class="btn mybtn ">GET APPOINTMENT</button></Link>
                                        </div>
                                    </div>
                                    <div class="col-xl-7">
                                        <div class="sidebar-image mr-2">

                                        </div>
                                    </div>
                                </div>
                            </section>
                        </header>
                    </div>
                </section>
                <section class="header-bottom-content-aria">
                    <div class="container">
                        <div class="row pr-4 mr-4">
                            <div class="col-md-4 mb-3 ">
                                <div class="d-flex  py-4 home-primary rounded  align-items-center">
                                    <h6 class="w-50 text-center "><span class="material-icons main-home-icon">query_builder</span></h6>
                                    <div class="home-icons-container">
                                        <h6>Opening Hours</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3  home-location ">
                                <div class="d-flex   py-4 rounded align-items-center">
                                    <h6 class="w-50 text-center "><span class="material-icons main-home-icon">location_on</span></h6>
                                    <div class="home-icons-container">
                                        <h6>Visit Our Location</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3 ">
                                <div class="d-flex  py-4 rounded align-items-center home-primary">
                                    <h6 class="w-50 text-center "><span class="material-icons main-home-icon">add_ic_call</span></h6>
                                    <div class="home-icons-container">
                                        <h6>Contact Us Now</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Homepage;
