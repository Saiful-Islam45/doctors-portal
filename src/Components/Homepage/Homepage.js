import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';


const Homepage = () => {
    return (
        <div>
            <div id="main-home-page">
                <section className="main-home">
                    <div className="container-fluid pl-4">
                        <header>
                            <nav className="navbar navbar-expand-lg navbar-light" id="main-home-navbar">
                                <div className="collapse navbar-collapse " id="navbarNav">
                                    <ul className="navbar-nav ml-auto">
                                       
                                       <li className="nav-item active">
                                       <Link className="nav-link main-home-nav" to="/">
                                          Home <span className="sr-only">(current)</span>
                                            </Link>
                                        </li>
                                       
                                        <li className="nav-item">
                                            <a className="nav-link main-home-nav" href="#">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link main-home-nav" href="#">Dental Service</a>
                                        </li>
                                        <Link to ="/doctorsDashboard">
                                        <li className="nav-item">
                                            <a className="nav-link main-home-nav text-white" href="#">Doctors Corner</a>
                                        </li>
                                        </Link>
                                        <li className="nav-item">
                                            <a className="nav-link main-home-nav text-white" href="#">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link main-home-nav text-white" href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <section className="header-content">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <div className="sidebar-content">
                                            <h2 className="text-capitalize fwb">Your new smile <br /> starts here</h2>
                                            <p className="py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio
                                            consectetur quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!</p>
                                            <Link to="/avaliableAppointments"><button type="button" className="btn mybtn ">GET APPOINTMENT</button></Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-7">
                                        <div className="sidebar-image mr-2">

                                        </div>
                                    </div>
                                </div>
                            </section>
                        </header>
                    </div>
                </section>
                <section className="header-bottom-content-aria">
                    <div className="container">
                        <div className="row pr-4 mr-4">
                            <div className="col-md-4 mb-3 ">
                                <div className="d-flex  py-4 home-primary rounded  align-items-center">
                                    <h6 className="w-50 text-center "><span className="material-icons main-home-icon">query_builder</span></h6>
                                    <div className="home-icons-container">
                                        <h6>Opening Hours</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3  home-location ">
                                <div className="d-flex   py-4 rounded align-items-center">
                                    <h6 className="w-50 text-center "><span className="material-icons main-home-icon">location_on</span></h6>
                                    <div className="home-icons-container">
                                        <h6>Visit Our Location</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 ">
                                <div className="d-flex  py-4 rounded align-items-center home-primary">
                                    <h6 className="w-50 text-center "><span className="material-icons main-home-icon">add_ic_call</span></h6>
                                    <div className="home-icons-container">
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
