import React from 'react';
import { useDispatch } from 'react-redux';
import { listarbebidas } from '../../action/bebida';
import "./boton.css";

export const Boton = () => {

const dispatch = useDispatch();

    const handleListarBebidas = () => {
        dispatch( listarbebidas() );
    }

    return (
        <button
            className="boton-principal"
            onClick={handleListarBebidas}
        >
            <i className="fas fa-search"></i>
            <span className="btn-informacion" >Buscar</span>    
        </button>
    )
}
