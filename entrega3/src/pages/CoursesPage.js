import React from 'react';
import Courses from "./../components/Courses"
import Header from "./../components/Header"

function CoursesPage(){
    return(
        <>
            <Header route="Home"></Header>
            <Courses></Courses>
        </>
    );
}

export default CoursesPage