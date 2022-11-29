import React from 'react';
import ControlledCheckbox from './Checkbox';
import FullWidthTextField from './Textfield'
import BasicButtons from './BasicButton'
import { NavLink } from "react-router-dom";

import "../style/log-in.css";

function LogIn(){
    return(
        <> 
            <div className='log-in-container'>
                <div className='log-in-body'>
                    <span className='text-underline'>Gestor académico USM</span>
                    <span>Las Cookies deben estar habilitas en su navegador</span>
                </div>
                <div className='log-in-info'>
                    <span className='purple-text'>¿Ya tienes una cuenta?</span>
                    <form className='form'>
                        <label>
                            <FullWidthTextField name="Nombre de usuario" className="input-text"></FullWidthTextField>
                        </label>
                        <div className='space'></div>
                        <label>
                        <FullWidthTextField name="Contraseña"></FullWidthTextField>
                        </label>
                        <div className='checkbox-container'>
                            <ControlledCheckbox></ControlledCheckbox>
                            <span>Recordar nombre de usuario</span>
                        </div>
                        <NavLink to="/cursos" className="nav-link">
                            <BasicButtons content="Acceder"></BasicButtons>
						</NavLink>
                        <div className='space'></div>
                        <span className='pink-text'>¿Olvidó su nombre de usuario o contraseña?</span>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default LogIn