import React from "react";
import Computation from './../components/Computation'
import Header from "./../components/Header"
import './../style/pages.css'

function ComputationPage(){
    return(
        <>
            <div className='page-container-cc'>
                <Header route="Home > Computación Científica > Información General"></Header>
                <div className='header-separator-computation'></div>
                <Computation></Computation>
            </div>
        </>
    );
}

export default ComputationPage