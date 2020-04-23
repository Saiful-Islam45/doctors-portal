import React from 'react';
import '../Dashboard/Dashboard.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <nav className="col-md-2 d-none d-md-block bg-light sidebar d-block mt-5">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link d-flex " to="/doctorsDashboard">
                                        <span className="material-icons">apps</span> 
                                        <span>Dashboard </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link d-flex" to="/doctorsAppointment">
                                        <span className="material-icons">today</span>
                                        <span>Appointment</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link d-flex" to="/doctorsPatients">
                                        <span className="material-icons"> people</span>
                                        <span>Patients</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link d-flex" to="/doctorsPrescriptions">
                                        <span className="material-icons">description</span>
                                        <span> Prescriptions</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link d-flex" to="#">
                                        <span className="material-icons">settings </span>
                                        <span>Settings</span>
                                    </Link>
                                </li>
                            </ul>
                            <Link to="/">
                            <div className="logout-aria">
                                <p className="logout-btn d-flex"> <span className="material-icons">trending_flat </span> Log Out</p>
                            </div>
                            </Link>
                        </div>

                    </nav>

        </div>
    );
};

export default Sidebar;