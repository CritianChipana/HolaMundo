import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { LogingScreen } from '../components/auth/LogingScreen'
import { Documentos } from '../components/documentos/Documentos'
import { NutriItem } from '../components/NutriSheap/NutriItem'
import { NutriScreen } from '../components/NutriSheap/NutriScreen'
import { NavBar } from '../components/ui/navbar/NavBar'

export const PublicScreenRoutes = () => {
    return (
        <>
            <NavBar/>

            <div>
                <Switch>
                    <Route exact path="/nutriSheap" component={ NutriScreen } />
                    <Route exact path="/" component={ NutriScreen } />
                    <Route exact path="/documentos" component={ Documentos }   />
                    <Route exact path="/login" component={ LogingScreen }   />
                    <Route exact path="/nutri" component={ NutriItem }   />
                    <Redirect to="/nutriSheap" /> 
                </Switch>
            </div>

        </>
    )
}
