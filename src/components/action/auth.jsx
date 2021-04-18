import { types } from "../../types/types";

export const authLog = () => ({
    type:types.authLog
})

export const authLogout = ()=> {
    return {
        type:types.authLogout
        }
}

export const authPrueba = (action)=>({   
        type: types.authPrueba,
        payload:action
    
})
