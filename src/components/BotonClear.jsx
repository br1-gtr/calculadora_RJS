import React from "react";
import '../css/BotonClear.css';
export const BotonClear = props => (
    <div className='btn-clear' onClick={props.clearHandler}>
        {props.children}
    </div>
);