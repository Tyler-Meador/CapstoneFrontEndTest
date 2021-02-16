
import { FETCH_TRANSACTION_FAILURE, FETCH_TRANSACTION_REQUEST, FETCH_TRANSACTION_SUCCESS, LOADING } from "./TransactionTypes"

const initialState = {
    success: null,
    loading: null,
    transaction: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_TRANSACTION_REQUEST:
            return{
                ...state,
                loading: true
            } 
        case FETCH_TRANSACTION_SUCCESS:
            return{
                success: true,
                loading: false,
                transaction: action.payload,
                error: ''
            }
        case FETCH_TRANSACTION_FAILURE:
            return {
                success: false,
                loading: false,
                transaction: [],
                error: action.payload,
            }
        default: return state
    }
}

export default reducer