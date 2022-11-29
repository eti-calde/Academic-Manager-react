import React from 'react'
import LogIn from './../components/LogIn'
import Logo from './../components/UniversityLogo'

function LogInPage(){
    return(
        <>
            <div className='login-page-container'>
                <Logo></Logo>
                <LogIn></LogIn>
            </div>
        </>
        
    );
}

export default LogInPage