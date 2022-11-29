import React from 'react';
import logo from './../assets/Images/logo.png';

import "../style/university-logo.css";

function UniversityLogo(){
    return(
        <> 
            <div className='logo-container'>
                <img className='logo' src={logo} alt="logo usm"></img>
                <span className='title'>Universidad Técnica Federico Santa María</span>
            </div>
        </>
    )
}

export default UniversityLogo