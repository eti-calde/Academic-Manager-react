import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/computation.css";

function Computation(){
    const navigate = useNavigate();
    return (
      <>
        <div className='informacion-container'>
            <div className='informacion marked'>
              <div className='bodyinfo'>Información General</div>
            </div>
            <div className='informacion'>
              <div className='bodyinfo'>Material de Clases</div>
            </div>
            <div className='informacion'>
              <div className='bodyinfo'>Material de Ayudantías</div>
            </div>
            <div className='informacion'>
              <div className='bodyinfo'>Entregas y Evaluaciones</div>
            </div>
        </div>
        <div className='ayudantes-container'>
            <b className='tituloayudantes'>Ayudantes:</b>
            <p className='ayudantes'>• Amalia Castro (amalia.castro@usm.cl)</p>
            <p className='ayudantes'>• Carlos Hoffman (carlos.hoffman@usm.cl)</p>
            <p className='ayudantes'>• Valeria Donoso (valeria.donoso@usm.cl)</p>
        </div>
        <div className='info-buttons'>
            <div className='button' onClick={() => navigate('/cursos/computacion cientifica/cronograma')}>Cronograma del Curso</div>
            <div className='button' onClick={() => navigate('/cursos/computacion cientifica/foro')}>Foro Estudiantes</div>
            <div className='button'>Noticias y Avisos</div>
        </div>
      </>
    );
}

export default Computation