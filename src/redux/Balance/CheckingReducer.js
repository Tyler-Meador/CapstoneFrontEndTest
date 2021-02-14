import { FETCH_Checking_FAILURE, FETCH_Checking_REQUEST, FETCH_Checking_SUCCESS } from "./BalanceTypes"

const initialState = {
    loading: false,
    balance: 0.00,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_Checking_REQUEST:
            return{
                ...state,
                loading: true
            } 
        case FETCH_Checking_SUCCESS:
            return{
                loading: false,
                balance: action.payload,
                error: ''
            }
        case FETCH_Checking_FAILURE:
            return {
                loading: false,
                balance: 0,
                error: action.payload,
            }
        default: return state
    }
}

export default reducer