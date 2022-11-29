import React from 'react';
import "../style/header.css";

function Header(props){
    return(
        <> 
            <div className='header'>
                <span className='route'>{props.route}</span>
            </div>
        </>
    )
}

export default Header