import React from 'react';
import ControlledCheckbox from './Checkbox';
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
                            <input type="text" name="name" placeholder='Nombre de usuario'></input>
                        </label>
                        <label>
                            <input type="text" name="name" placeholder='Constraseña'></input>
                        </label>
                        <div className='checkbox-container'>
                            <ControlledCheckbox></ControlledCheckbox>
                            <span>Recordar nombre de usuario</span>
                        </div>
                        <input type="submit" value="Acceder" className='submit'/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LogIn