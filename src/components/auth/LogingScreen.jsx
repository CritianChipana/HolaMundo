import React from 'react';
import "./loginScreen.css";
import { useDispatch } from 'react-redux'
import { authLog } from '../action/auth';


export const LogingScreen = () => {

const dispatch = useDispatch();

const handleClickLog = () =>{

    dispatch( authLog() );

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
