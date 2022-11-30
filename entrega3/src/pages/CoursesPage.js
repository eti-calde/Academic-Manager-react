import React from 'react';
import Courses from "./../components/Courses"
import Header from "./../components/Header"
import './../style/pages.css'

function CoursesPage(){
    return(
        <>
            <div className='page-container'>
                <Header route="Home"></Header>
                <div className='header-separator-home'></div>
                <Courses></Courses>
            </div>
        </>
    );
}

export default CoursesPage