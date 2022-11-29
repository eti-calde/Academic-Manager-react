import React from 'react';
import "../style/calendar.css";
import Calendar from 'react-calendar'; 
import img1 from './../assets/Images/faker.jpg';
import {useState} from 'react'
function Calendario(){
    const [date, setDate] = useState(new Date())
    return (
        <>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date}/>
            </div>
            <div className="profilebox"> 
                <img className="profile-pic" src={img1} alt="foto de perfil"></img>
                <div className="info">
                    <h3>Lee Sang-Hyeok</h3>
                    <p>Ingeniería Civil Informática</p>
                </div>
                <div className='infopruebas'>
                    <b> 2022-12-03</b>
                    <p>Certamen III: Computación Científica </p>
                </div>
            </div>

        </>
    );
}

export default Calendario