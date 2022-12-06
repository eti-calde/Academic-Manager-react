import React from "react";
import Crono from './../components/Crono'
import Header from "./../components/Header"
import './../style/pages.css'

function CronoPage(){
    return(
        <>
            <div className='page-container-cc'>
                <Header route="Home > Computación Científica > Información General > Cronograma"></Header>
                <div className='header-separator-computation'></div>
                <Crono></Crono>
            </div>
        </>
    );
}

export default CronoPage