import { FETCH_ROLLOVER_FAILURE, FETCH_ROLLOVER_REQUEST, FETCH_ROLLOVER_SUCCESS } from "./BalanceTypes"

const initialState = {
    loading: false,
    balance: 0.00,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_ROLLOVER_REQUEST:
            return{
                ...state,
                loading: true
            } 
        case FETCH_ROLLOVER_SUCCESS:
            return{
                loading: false,
                balance: action.payload,
                error: ''
            }
        case FETCH_ROLLOVER_FAILURE:
            return {
                loading: false,
                balance: 0,
                error: action.payload,
            }
        default: return state
    }
}

export default reducer