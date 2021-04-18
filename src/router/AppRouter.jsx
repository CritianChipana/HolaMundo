import React from 'react'
import { useSelector } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { PrivateRouter } from './PrivateRouter';
import { PrivateScreenRoutes } from './PrivateScreenRoutes';
import { PublicRouter } from './PublicRouter';
import { PublicScreenRoutes } from './PublicScreenRoutes';



export const AppRouter = () => {

    const {checking,uid} = useSelector(state => state.auth)

    if( checking ){
        return <h1>cargando ....</h1>
    }

    return (
        <>
            <Router>

                <div>
                    <Switch>

                        <PublicRouter
                            // exact
                            path="/"
                            component = { PublicScreenRoutes}
                            isAuthenticated={!!uid}
                        />

                        <PrivateRouter
                            // exact
                            path="/"
                            component = { PrivateScreenRoutes }
                            isAuthenticated= {!!uid }
                        />
                        
                    </Switch>    
                </div>
            </Router>

            
        </>
    )
}
