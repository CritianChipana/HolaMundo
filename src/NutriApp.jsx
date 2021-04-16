import React from 'react';


import { AppRouter } from './router/AppRouter';
import { store } from './store/store';


import "./NutriApp.css";
import { Provider } from 'react-redux';

export const NutriApp = () => {
    return (
        <Provider store={store} >
            <AppRouter/>
        </Provider>
        )
}





