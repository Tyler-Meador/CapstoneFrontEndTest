import { FETCH_SAVINGS_FAILURE, FETCH_SAVINGS_REQUEST, FETCH_SAVINGS_SUCCESS } from "./BalanceTypes"

const initialState = {
    loading: false,
    checkingBalance: 10,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_SAVINGS_REQUEST:
            return{
                ...state,
                loading: true
            } 
        case FETCH_SAVINGS_SUCCESS:
            return{
                loading: false,
                balance: action.payload,
                error: ''
            }
        case FETCH_SAVINGS_FAILURE:
            return {
                loading: false,
                balance: 0,
                error: action.payload,
            }
        default: return state
    }
}

export default reducer