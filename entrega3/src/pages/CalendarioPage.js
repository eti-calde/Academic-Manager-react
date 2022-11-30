import React from 'react';
import Calendar from "../components/Calendario"
import Header from "./../components/Header"
import './../style/pages.css'


function CalendarioPage(){
    return(
        <>
            <div className='page-container-calendar'>
                <Header route="Home > Calendario"></Header>
                <div className='header-separator-calendar'></div>
                <Calendar></Calendar>
            </div>
        </>
    );
}

export default CalendarioPage