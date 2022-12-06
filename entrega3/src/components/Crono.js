import React from 'react';
import MultilneText from './../components/MultilineText'
import "../style/cronograma.css";
import {useState} from 'react'

function Crono(){

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
        <div>
            <b>Cronograma:</b>
            <p>• 03/02/2023 Tarea N°1 <span className='pink-text'>[editar]</span></p>
            <p>• 10/04/2023 Certamen N°1 <span className='pink-text'>[editar]</span></p>
            <p>• 02/05/2023 Tarea N°2 <span className='pink-text'>[editar]</span></p>
            <p>• 13/05/2023 Certamen N°2 <span className='pink-text'>[editar]</span></p>
            <p>• 07/06/2023 Tarea N°3 <span className='pink-text'>[editar]</span></p>
            <p className={`${toggleClassCheck}`}>• 14/06/2023 Certamen N°3 <span className='pink-text'>[editar]</span></p>
        </div>
        <div className='info-buttons'>
            <div>Crear un evento</div>
            <div className='cat-container-1'>
                <label for="Mes">Mes del evento:  </label>
                <select name="Mes" className='input'>
                    <option value="Enero">Enero</option>
                    <option value="Febrero">Febrero</option>
                    <option value="Marzo">Marzo</option>
                    <option value="Abril">Abril</option>
                    <option value="Mayo">Mayo</option>
                    <option value="Junio">Junio</option>
                    <option value="Julio">Julio</option>
                    <option value="Agosto">Agosto</option>
                    <option value="Septiembre">Septiembre</option>
                    <option value="Octubre">Octubre</option>
                    <option value="Noviembre">Noviembre</option>
                    <option value="Diciembre">Diciembre</option>
                </select>
            </div>
            <div className='recomendacion'>
                <p>Fechas Recomendadas: </p>
            </div>
            <div className=''>
                <label>Elegir Fechas:</label>
                <input type="date" className='input'></input>
            </div>
            <div className=''>
                <label>Nombre del evento:</label>
                <input type="text" className='input'></input>
            </div>
        </div>
        <div className={`button`} onClick={handleClick}>Agregar Evento</div>
      </>
    );
}

export default Crono



