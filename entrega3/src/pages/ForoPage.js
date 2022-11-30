import React from "react";
import Foro from './../components/Foro'
import Header from "./../components/Header"
import './../style/pages.css'

function ForoPage(){
    return(
        <>
            <div className='page-container-cc'>
                <Header route="Home > Computación Científica > Información General > Foro"></Header>
                <div className='header-separator-computation'></div>
                <Foro></Foro>
            </div>
        </>
    );
}

export default ForoPage