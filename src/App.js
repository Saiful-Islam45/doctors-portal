import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';

import '@material/react-material-icon/dist/material-icon.css';
import Header from './Components/Header/Header';
import CalendarPicker from './Components/CalendarPicker/CalendarPicker';


function App() {
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
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
