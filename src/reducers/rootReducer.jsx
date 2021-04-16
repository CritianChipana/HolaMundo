import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { bebidaReducer } from './bebidaReducer';


import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers( {
    ui: uiReducer,
    bebida: bebidaReducer,
    auth: authReducer
} )
