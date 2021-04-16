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

    const {checking} = useSelector(state => state.auth)

    return (
        <>
            <Router>

                <div>
                    <Switch>

                        <PublicRouter
                            path="/"
                            component = { PublicScreenRoutes}
                            isAuthenticated={checking}
                        />

                        <PrivateRouter
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
