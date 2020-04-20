import React from 'react';

const Header = () => {
    return (
        <div>
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
        </div>
    );
};

export default Header;