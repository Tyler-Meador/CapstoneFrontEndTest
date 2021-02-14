import { FETCH_DBA_FAILURE, FETCH_DBA_REQUEST, FETCH_DBA_SUCCESS } from "./BalanceTypes"

const initialState = {
    loading: false,
    balance: 0.00,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_DBA_REQUEST:
            return{
                ...state,
                loading: true
            } 
        case FETCH_DBA_SUCCESS:
            return{
                loading: false,
                balance: action.payload,
                error: ''
            }
        case FETCH_DBA_FAILURE:
            return {
                loading: false,
                balance: 0,
                error: action.payload,
            }
        default: return state
    }
}

export default reducer