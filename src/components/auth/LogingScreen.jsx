import React from 'react';
import "./loginScreen.css";
import { useDispatch } from 'react-redux'
import { authLog } from '../action/auth';
import { Redirect } from 'react-router';


export const LogingScreen = () => {

const dispatch = useDispatch();

const handleClickLog = () =>{

    dispatch( authLog() );
    console.log("asd");
    <Redirect to="/" />

}

    return (
        <div>
            <h1>login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ handleClickLog }
            >
                log in
            </button>

        </div>
    )
}
