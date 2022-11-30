import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/courses.css";

function Courses(){
    const navigate = useNavigate();
    return (
      <>
        <div className='courses-container'>
            <div className='course'>
              <div className='course-header' onClick={() => navigate('/cursos/computacion cientifica')}>Computación Científica</div>
              <div className='course-body' onClick={() => navigate('/cursos/computacion cientifica')}></div>
            </div>
            <div className='course'>
              <div className='course-header'>Optimización</div>
              <div className='course-body'></div>
            </div>
            <div className='course'>
              <div className='course-header'>Química</div>
              <div className='course-body'></div>
            </div>
            <div className='course'>
              <div className='course-header'>Física IV</div>
              <div className='course-body'></div>
            </div>
            <div className='course'>
              <div className='course-header'>Cálculo VII</div>
              <div className='course-body'></div>
            </div>
        </div>
      </>
    );
}

export default Courses