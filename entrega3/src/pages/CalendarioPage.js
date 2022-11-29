import React from 'react';
import Calendario from "../components/Calendario"
import Header from "./../components/Header"

function CalendarioPage(){
    return(
        <>
            <Header route="Home > Calendario"></Header>
            <Calendario></Calendario>
        </>
    );
}

export default CalendarioPage