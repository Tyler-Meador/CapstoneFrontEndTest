import { FETCH_ROTHIRA_FAILURE, FETCH_ROTHIRA_REQUEST, FETCH_ROTHIRA_SUCCESS } from "./BalanceTypes"

const initialState = {
    loading: false,
    balance: 0.00,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_ROTHIRA_REQUEST:
            return{
                ...state,
                loading: true
            } 
        case FETCH_ROTHIRA_SUCCESS:
            return{
                loading: false,
                balance: action.payload,
                error: ''
            }
        case FETCH_ROTHIRA_FAILURE:
            return {
                loading: false,
                balance: 0,
                error: action.payload,
            }
        default: return state
    }
}

export default reducer