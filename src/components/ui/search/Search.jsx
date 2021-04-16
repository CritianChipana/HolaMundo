import React from 'react'
import { useForm } from '../../../hooks/useForm'
import { Boton } from '../boton/Boton';

import "./search.css";

export const Search = () => {

const  [formValue, handleInputChange]= useForm({
    alimento:''
})

const {alimento} = formValue;


const handleonSubmit = (e)=>{
    e.preventDefault();

    console.log(alimento);

}

    return (
        <div className="" >
            <form onSubmit={ handleonSubmit } className="contenedor">
                <input 
                    type="text"
                    className="inputbuscador"
                    name="alimento"
                    autoComplete="off"
                    value={alimento}
                    onChange={ handleInputChange }
                    />

                <Boton/>
            </form>
        </div>
    )
}
