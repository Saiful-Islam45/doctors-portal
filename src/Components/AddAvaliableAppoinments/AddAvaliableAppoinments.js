import React, { useEffect } from 'react';
import cardData from '../../resources/cardData.json';
import { useState } from 'react';

const AddAvaliableAppoinments = () => {
    const [addData, setAddData] = useState(null);
    useEffect(() => {
        setAddData(cardData);
    }, [])
    const handleAddInventory = ()=>{
        fetch('http://localhost:5200/addAvailableAppointment',{
            method:'POST',
            body:JSON.stringify(addData),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res=>res.json())
        .then(data =>{
            console.log("Data Inserted Successful",data);
            
        })
    }
    return (
        <div className="container">
            <h1>Add Appointment Data</h1>
            <button className="btn btn-info p-2" onClick={handleAddInventory}>Add Appointment</button>
        </div>
    );
};
export default AddAvaliableAppoinments;
