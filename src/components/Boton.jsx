import React from "react";
import '../css/Boton.css';
export function Boton(props){

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return(
        <div 
        className={`btn ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.clickHandler(props.children)}>
            {props.children}
        </div>
    );
};