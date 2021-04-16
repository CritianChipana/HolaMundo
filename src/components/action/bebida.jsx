import { fetchBebida } from "../../helpers/fetch"
import { types } from "../../types/types.jsx";



export const listarbebidas = ()=>{

    return async ( dispatch )=>{

        const resp = await fetchBebida('bebida',{},'GET')
        const body = await resp.json();

        if( body.ok ){
            // console.log(body.bebidas);
            dispatch( Lbebidas( {
                datas : body.bebidas
            } ));
        }else{
            console.log("No se encontro datos en la BD, ERROR BEBIDAS/ACTION");
        }
    }
}

const  Lbebidas = ( bebidas ) =>({
    type: types.bebidaListar,
    payload: bebidas
})