import React from 'react'


import { Search } from '../ui/search/Search'
import { Tabla } from '../ui/tabla/Tabla'

import "./NutriScreen.css";


export const NutriScreen = () => {



    return (
        <>
        <div className="NutriScreen-contenedor">

            <h4 className="NutriScreen-titulo"  >lista de las bebinas energaticas  </h4>
            <hr/>

            <Search/>

            <Tabla/>
        
        </div>

        </>
    )
}
