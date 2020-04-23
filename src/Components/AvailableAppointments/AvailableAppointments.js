import React, { useState, useEffect } from 'react';
import Spinner from '../../resources/images/spinner_1.gif';
import ModalForm from '../ModalForm/ModalForm';

const AvailableAppointments = (props) => {
  const [appointments, setAppointments] = useState([])
  const next = new Date();
  next.setDate(new Date().getDate() + 1);
  next.setMinutes(next.getMinutes() - next.getTimezoneOffset());
  const date = JSON.stringify(next).slice(1, 11);
  useEffect(() => {
    fetch("https://doctors-portal-saiful.herokuapp.com/availableAppointments")
      .then(res => res.json())
      .then(data => {
        setAppointments(data)
        console.log(data);

        document.getElementById('spinner').style.display = "none";
      })
  }, [])
  return (
    <div>
      <div>
        <section className="header-bottom-content-aria my-4 bg-mask">
          <div className="container-fluid justify-align-center text-center mt-4">
            <h3 className="primary-color">Available Appointments on {props.date ? props.date : date}</h3>
            <div className="col-12 my-5">
              <img className="img-fluid mx-auto" id="spinner" src={Spinner} alt="spinner" />
            </div>
            <div className="row">
              {
                appointments.map(schedule => {
                  return <div className="col-md-4 p-4" key={schedule._id}>
                    <div className="card p-3 border-0 shadow">
                      <div className="card-body">
                        <h5 className="card-title primary-color">{schedule.title}</h5>
                        <p className="card-text">{schedule.time}</p>
                        <p className="card-text">{schedule.space} SPACES AVAILABLE</p>
                        <button type="button" class="btn primary-btn font-weight-bold" data-toggle="modal" data-target={"#exampleModal"+schedule._id}>Book Appointment</button>
                      </div>
                    </div>
                    <ModalForm date={props.date ? props.date : date} schedule={schedule} key={schedule._id}></ModalForm>
                  </div>
                })
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AvailableAppointments;