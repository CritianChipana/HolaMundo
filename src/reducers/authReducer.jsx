import { types } from "../types/types";

const initialState = {
    checking: false,
    a:null,
    name:'',
    uid:''
}


export const authReducer = (state=initialState, action) => {

    switch (action.type) {
        case types.authLog:
            return{
                checking: true
            }
        case types.authLogout:
            return{
                ...state,
                checking:false
            }

        case types.authPrueba:
            return{
                ...state,
                checking:false,
                ...action.payload
            }
    
        default:
            return state;
    }

}
