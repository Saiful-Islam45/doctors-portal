import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';

import '@material/react-material-icon/dist/material-icon.css';
import Header from './Components/Header/Header';
import CalendarPicker from './Components/CalendarPicker/CalendarPicker';
import AddAvaliableAppoinments from './Components/AddAvaliableAppoinments/AddAvaliableAppoinments';
import AvailableAppointments from './Components/AvailableAppointments/AvailableAppointments';
import Dashboard from './DoctorsComponents/Dashboard/Dashboard';
import Sidebar from './DoctorsComponents/Sidebar/Sidebar';
import AppointmentCalendar from './DoctorsComponents/DoctorAppointment/AppointmentCalender';
import DoctorAppointment from './DoctorsComponents/DoctorAppointment/DoctorAppointment';
import Patients from './DoctorsComponents/Patients/Patients';
import Prescription from './DoctorsComponents/Prescriptions/Prescription';
import PatientModal from './DoctorsComponents/Prescriptions/PatientModal';



function App(props) {
  const [date,setDate]= useState()
  const dateHandler = (date)=>{
    setDate(date);
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = "/">
            <Homepage></Homepage>
          </Route>
          <Route path="/avaliableAppointments">
          <div id="main-home-page">
                <section class="main-home">
                    <div class="container-fluid pl-4">
                      <header>
                        <Header></Header>
                        <CalendarPicker dateHandler={dateHandler}></CalendarPicker>
                      </header>
                      
                      </div>
                </section>
                <AvailableAppointments date ={date}></AvailableAppointments>
            </div>
            
          </Route>
          <Route path="/addData">
            <AddAvaliableAppoinments></AddAvaliableAppoinments>
          </Route>
          <Route path="/addPatient">
            <PatientModal/>
          </Route>
          <Route path='/doctorsDashboard'>
          <Dashboard/>
          </Route>
          <Route path="/doctorsAppointment">
           <div className="container-fluid bg-light">
            <div className="row">
            <Sidebar/>
            <AppointmentCalendar dateHandler={dateHandler}/>
            <DoctorAppointment  date={date}/>
            </div>
            </div>
           </Route>
           <Route path="/doctorsPatients">
           <div className="container-fluid bg-light">
            <div className="row">
            <Sidebar/>
            <Patients/>
            </div>
            </div>
           </Route>
           <Route path="/doctorsPrescriptions">
           <div className="container-fluid bg-light">
            <div className="row">
            <Sidebar/>
            <Prescription/>
            </div>
            </div>
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
