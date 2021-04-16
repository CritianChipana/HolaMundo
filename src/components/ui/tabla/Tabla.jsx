import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./tabla.css";

export const Tabla = () => {

    const {datas} = useSelector(state => state.bebida)

    console.log(datas);

    return (

        <div className="contenedor-tabla" >
            <table >
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Agua</th>
                    <th>Calcio</th>
                    <th>Carbohidratos</th>
                    <th>Hierro</th>
                    <th>Fosforo</th>
                    <th>Potasio</th>
                    <th>Zinc</th>
                </tr>
                </thead>
                <tbody>

                    {
                        datas.map( e => (
                            <tr key={e.idcodigo} >
                                <td>{e.Nombre}</td>
                                <td className="td-number">{ e.Agua }</td>
                                <td className="td-number">{ e.Calcio }</td>
                                <td className="td-number">{ e.Carbohidratos }</td>
                                {/* className="td-number" <td>{ e.Grasa Total }</td> */}
                                <td className="td-number">{ e.Hierro }</td>
                                <td className="td-number">{ e.Fosforo }</td>
                                <td className="td-number">{ e.Potasio }</td>
                                <td className="td-number">{ e.Zinc }</td>
                                <Link to="/nutri" >Calcular...</Link>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
