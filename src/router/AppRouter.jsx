import React from 'react'
import { useSelector } from 'react-redux';

import {
    BrowserRouter as Router,
    Redirect,
    Switch,
} from "react-router-dom";
import { PrivateRouter } from './PrivateRouter';
import { PrivateScreenRoutes } from './PrivateScreenRoutes';
import { PublicRouter } from './PublicRouter';
import { PublicScreenRoutes } from './PublicScreenRoutes';



export const AppRouter = () => {

    const {checking} = useSelector(state => state.auth)

    return (
        <>
            <Router>

                <div>
                    <Switch>

                        <PublicRouter
                            // exact
                            path="/"
                            component = { PublicScreenRoutes}
                            isAuthenticated={checking}
                        />

                        <PrivateRouter
                            // exact
                            path="/"
                            component = { PrivateScreenRoutes }
                            isAuthenticated= { checking }
                        />
                    
                        
                    </Switch>    
                </div>
            </Router>

            
        </>
    )
}
