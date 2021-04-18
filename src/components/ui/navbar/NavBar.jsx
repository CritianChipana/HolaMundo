import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { authLogout } from '../../action/auth';


export const NavBar = () => {

    const { uid} = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const handleLogout = ()=>{
        dispatch( authLogout() );
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                NutriSheap
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/buscar"
                    >
                        BUSCAR
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/documentos"
                    >
                        DOCUMENTOS
                    </NavLink>
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/desarrollo"
                    >
                        DESARROLLO
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    {
                        (!!uid)
                        ?   
                        //<>
                                <NavLink
                                    activeClassName="active"
                                    className="nav-item nav-link"
                                    exact
                                    to="/update"
                                >
                                    MODIFICAR
                                </NavLink>

                        //         <NavLink
                        //             activeClassName="active"
                        //             className="nav-item nav-link"
                        //             exact
                        //             to="/delete"
                        //         >
                        //             Eliminar
                        //         </NavLink>
                        //         <button 
                        //             className=" btn nav-item nav-link" 
                        //             onClick={handleLogout}
                        //         >
                        //             Logout
                        //         </button>

                        //     </>
                                
                        :
                            <Link 
                                to={"/login"}
                            >
                                Log in
                            </Link>
                    }
                </ul>
            </div>
        </nav>
    )
}