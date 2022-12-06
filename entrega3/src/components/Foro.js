import React from 'react';
import "../style/foro.css";
import {useState} from 'react'

function Foro(){

    const [btnSate, setBtnState] = useState(true)
    function handleClick(){
      setBtnState(btnSate => !btnSate);
    }

    let toggleClassCheck = btnSate ? ' hidden': null;
    // const button = document.getElementById('hidden')
    // const butToClick = document.getElementById('but')
    // butToClick.addEventListener( 'click', ()=> button.classList.remove('hidden') )
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
            <b className='tituloayudantes'>Temas:</b>
            <p className='ayudantes'>• Ayudantía Solidaria (3 Respuestas) <span className='pink-text'>[unirse]</span></p>
            <p className='ayudantes'>• Dudas Tareas  (+9 Respuestas)<span className='pink-text'>[unirse]</span></p>
            <p className='ayudantes'>• Programas necesarios para tareas (2 Respuestas)<span className='pink-text'>[unirse]</span></p>
            <p className={`ayudantes ${toggleClassCheck}`} id='hidden'>• Ayuda Certamen (0 Respuestas)<span className='pink-text'>[unirse]</span></p>
        </div>
        <div className='info-buttons'>
            <div>Crear un tema</div>
            <div className='cat-container-1'>
              <label>Título del tema:</label>
              <input type="text" className='input' ></input>

            </div>
            <div className='cat-container-2'>
              <label>Descripción del tema:</label>
              <input type="text" className='input' ></input>
            </div>
        </div>
        <div className={`button`} onClick={handleClick}>Agregar Tema</div>
      </>
    );
}

export default Foro