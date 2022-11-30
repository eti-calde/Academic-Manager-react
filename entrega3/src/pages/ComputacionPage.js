import React from "react";
import Computation from './../components/Computation'
import Header from "./../components/Header"
import './../style/pages.css'

function ComputationPage(){
    return(
        <>
            <div className='page-container'>
                <Header route="Home > Computación Científica > Información General"></Header>
                <div className='header-separator-home'></div>
                <Computation></Computation>
            </div>
        </>
    );
}

export default ComputationPage