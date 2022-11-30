import React from 'react'
import LogIn from './../components/LogIn'
import Logo from './../components/UniversityLogo'
import "../style/log-in.css";


function LogInPage(){
    return(
        <>
            <div className='login-page-container'>
                <div className='space'></div>
                <Logo></Logo>
                <div className='big-space'></div>
                <LogIn></LogIn>
            </div>
        </>
        
    );
}

export default LogInPage