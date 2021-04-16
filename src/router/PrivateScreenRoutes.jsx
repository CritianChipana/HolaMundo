import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DeleteScren } from '../components/admiinstrador/DeleteScren'
import { UpdateScreen } from '../components/admiinstrador/UpdateScreen'
import { NavBar } from '../components/ui/navbar/NavBar'


export const PrivateScreenRoutes = () => {
    return (
        <>
            <NavBar/>
            {/*  un componente pra hacer e crud */}

            <div>
                <Switch>
                    <Route exact path="/update" component={ UpdateScreen }  />
                    <Route exact path="/delete" component={ DeleteScren } /> 
                    <Redirect to="/nutriSheap" />
                </Switch>
            </div>
        </>
    )
}
