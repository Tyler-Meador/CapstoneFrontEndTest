import { FETCH_REG_FAILURE, FETCH_REG_REQUEST, FETCH_REG_SUCCESS } from "./BalanceTypes"

const initialState = {
    loading: false,
    balance: 0.00,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_REG_REQUEST :
            return{
                ...state,
                loading: true
            } 
        case FETCH_REG_SUCCESS:
            return{
                loading: false,
                balance: action.payload,
                error: ''
            }
        case FETCH_REG_FAILURE:
            return {
                loading: false,
                balance: 0,
                error: action.payload,
            }
        default: return state
    }
}

export default reducer