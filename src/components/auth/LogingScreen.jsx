import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import "./loginScreen.css";
import { useDispatch } from 'react-redux'
import { authLog, authPrueba } from '../action/auth';
import { Redirect } from 'react-router';



export const LogingScreen = () => {

const dispatch = useDispatch();



const [formLoginValue, handleInputChange] = useForm({
    usuario:'',
    password: ''
});

const {usuario, password} = formLoginValue;



const handleLogIn = (e) =>{
    e.preventDefault();
    console.log("A");
    

    dispatch( authPrueba({
        name:"acas",
        uid:"asd"
       
    }) );
    <Redirect to="/" />

}

    return (
        <div className="contenedor-login" >
            <form onSubmit={ handleLogIn } className="login-form">
                <div className="form-column-a">
                    <img 
                        src="https://i.pinimg.com/originals/f3/06/5c/f3065c2ad40d90e218c55c8376b1d3b7.png"
                        alt="Imagen de la user"
                        className="img-login"
                    />
                    <h5>Bienvenido de vuelta</h5>
                    <p>vamos a segir creciendo</p>
                </div>

                <div className="form-column-b">
                    <div className="asd">

                        <label htmlFor="usuario">Usuario: <br/>
                            <input 
                                type="text" 
                                className="usuario"
                                name="usuario" 
                                value={ usuario }
                                onChange={ handleInputChange }
                                placeholder="example123"
                            />
                        </label>

                        <label htmlFor="password">Password: <br/>
                            <input 
                                type="password" 
                                className="password"
                                name="password"
                                value={ password }
                                onChange= { handleInputChange }
                                placeholder="***********"

                            />
                        </label>

                        <button
                            className="btn btn-primary"
                        >
                            log in
                        </button>
                    </div>
                </div>

            </form>

        </div>
    )
}
