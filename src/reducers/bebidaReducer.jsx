import { types } from "../types/types";

const initialvalue = {
    ok:false,
    datas: []
}

export const bebidaReducer =(state =initialvalue, action)=>{

    switch (action.type) {
        
        case types.bebidaListar:
            return  {
                ok:true,
            ...action.payload
            };
    
        default:
            return state;
    }

}

