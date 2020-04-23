import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" id="main-home-navbar">
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link main-home-nav">Home <span className="sr-only">(current)</span></Link>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link main-home-nav" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link main-home-nav" href="#">Dental Service</a>
                        </li>
                        <Link to="/doctorsDashboard">
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
        </div>
    );
};

export default Header;