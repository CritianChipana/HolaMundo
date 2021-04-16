import { types } from "../types/types";

const initialState = {
    checking: false
}


export const authReducer = (state=initialState, action) => {

    switch (action.type) {
        case types.authLog:
            return {
                ...state,
                checking: true
            }
        case types.authLogout:
            return {
                ...state,
                checking:false
            }
    
        default:
            return state;
    }

}
