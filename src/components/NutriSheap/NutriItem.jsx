import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import './nutriItem.css'

export const NutriItem = ({history}) => {

    const {idnutri} =useParams();
    const { ok } = useSelector(state => state.bebida)
    const state = useSelector(state => state.bebida.datas[idnutri])
    
    if(!ok){
        return <Redirect to="/" />
    }
    
    
    const {Nombre,Agua, Calcio, Carbohidratos, Hierro, Fosforo, Potasio, Zinc } = state;

    const handleReturn = ()=>{
        history.goBack();
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `../assets/heroes/ "heroeId" .jpg` }
                    alt={ "No se encontro Imagen del alimento" }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>


            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { Nombre } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Agua: </b> { Agua } </li>
                    <li className="list-group-item"> <b> Calcio: </b> { Calcio } </li>
                    <li className="list-group-item"> <b> Carbohidratos: </b> { Carbohidratos } </li>
                    <li className="list-group-item"> <b> Hierro: </b> { Hierro } </li>
                    <li className="list-group-item"> <b> Fosforo: </b> { Fosforo } </li>
                    <li className="list-group-item"> <b> Potasio: </b> { Potasio } </li>
                    <li className="list-group-item"> <b> Zinc: </b> { Zinc } </li>
                </ul>

                <h5> Characters </h5>
                {/* <p> { characters } </p> */}

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
    )
}
