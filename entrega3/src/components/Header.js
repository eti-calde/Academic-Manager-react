import React from 'react';
import "../style/header.css";

function Header(props){
    return(
        <> 
            <div className='header-container'>
                <span className='route'>{props.route}</span>
            </div>
        </>
    )
}

export default Header