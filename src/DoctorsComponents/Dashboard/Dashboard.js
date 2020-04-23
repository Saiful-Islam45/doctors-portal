import React, { useState, useEffect, Fragment } from 'react';
import spinner from "../../resources/images/spinner_1.gif";
import './Dashboard.css';

import Sidebar from '../Sidebar/Sidebar';
import StatusModal from './StatusModal';
import AppointmentModal from './AppointmentModal';
import PrescriptionFormModal from './PrescriptionFormModal';
import PrescriptionViewModal from './PrescriptionViewModal';

const Dashboard = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('https://doctors-portal-saiful.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    const pendingAppointments = []
    appointments.filter(appointment => {
        appointment.status === "pending" &&
            pendingAppointments.push(appointment);
    })
    const todayAppointment = []
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    const date = JSON.stringify(today).slice(1, 11);
    appointments.filter(appointment => {
        appointment.date === date &&
            todayAppointment.push(appointment);
    })
    const [totalPatients, setTotalPatients] = useState([]);
    useEffect(() => {
        fetch('https://doctors-portal-saiful.herokuapp.com/totalPatients')
            .then(res => res.json())
            .then(data => setTotalPatients(data))
    }, [])
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    {/* <!-- dashboard main content --> */}
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 main-content-wrapper">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                            <h1 className="h2">Dashboard</h1>
                        </div>

                        {/* <!-- dashboard top contents --> */}
                        <div className="row d-flex  text-white">
                            <div className="col-md-3 mb-3 ">
                                <div className="d-flex bg-danger py-4 rounded pending-appointment  align-items-center">
                                    <h6 className="w-50 text-right pr-2 text-right pr-2">{pendingAppointments.length}</h6>
                                    <p>Pending <br /> Appointment </p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3 ">
                                <div className="d-flex today-appointment py-4 rounded align-items-center">
                                    <h6 className="w-50 text-right pr-2">{todayAppointment.length}</h6>
                                    <p>Today's <br /> Appointment </p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3 ">
                                <div className="d-flex total-appointment py-4 rounded align-items-center">
                                    <h6 className="w-50 text-right pr-2">{appointments.length}</h6>
                                    <p>Total <br /> Appointment </p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3 ">
                                <div className="d-flex total-patients py-4 rounded align-items-center">
                                    <h6 className="w-50 text-right pr-2">{totalPatients[0]}</h6>
                                    <p>Total <br /> Patients </p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Recent appointments area --> */}
                        <div className="recent-appointments-container mt-4 p-4 bg-white">
                            <div className="d-flex justify-content-between">
                                <div className="p-2">
                                    <h2>Recent Appointments</h2>
                                </div>

                            </div>
                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr. No</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Contact</th>
                                            <th scope="col">Prescription</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            appointments.length > 0 ?
                                                appointments.map((appointment, index) => {
                                                    return <Fragment>
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{appointment.date}</td>
                                                            <td>{appointment.time}</td>
                                                            <td>{appointment.name}</td>
                                                            <td>{appointment.phone}</td>
                                                            {
                                                                appointment.prescription === null ?
                                                                    <td><button data-toggle="modal" data-target={"#prf" + appointment._id} className="btn btn-block text-dark">Not Added</button></td>
                                                                    :
                                                                    <td><button data-toggle="modal" data-target={"#prv" + appointment._id} className="btn btn-block primary-btn text-dark">View</button></td>
                                                            }
                                                            {
                                                                appointment.status === "pending" &&
                                                                <td><button data-toggle="modal" data-target={"#st" + appointment._id} className="btn secondary-btn text-light px-3">{appointment.status}</button><button data-toggle="modal" data-target={"#ap" + appointment._id} className="btn btn-warning  text-light"><span class="material-icons">edit</span></button></td>
                                                            }
                                                            {
                                                                appointment.status === "approved" &&
                                                                <td><button data-toggle="modal" data-target={"#st" + appointment._id} className="btn btn-success text-light px-3">{appointment.status}</button><button data-toggle="modal" data-target={"#ap" + appointment._id} className="btn btn-warning  text-light"><span className="material-icons">edit</span></button></td>
                                                            }
                                                            {
                                                                appointment.status === "cancelled" &&
                                                                <td><button data-toggle="modal" data-target={"#st" + appointment._id} className="btn btn-danger text-light px-3">{appointment.status}</button><button data-toggle="modal" data-target={"#ap" + appointment._id} className="btn btn-warning  text-light"><span className="material-icons">edit</span></button></td>
                                                            }
                                                            <button id="successBtn" data-toggle="modal" data-target="#successModal" type="button" className="d-none">success</button>

                                                        </tr>
                                                        <StatusModal id={"st" + appointment._id} appointment={appointment}></StatusModal>
                                                         
                                                        <AppointmentModal id={"ap" + appointment._id} appointment={appointment}></AppointmentModal>
                                                        <PrescriptionFormModal id={"prf" + appointment._id} appointment={appointment}></PrescriptionFormModal>
                                                        <PrescriptionViewModal id={"prv" + appointment._id} appointment={appointment}></PrescriptionViewModal>
                                                    </Fragment>
                                                })
                                                :
                                                <tr className="text-center">
                                                    <td colSpan="7"><img src={spinner} alt="spinner" /></td>
                                                </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;