import { FETCH_CD_FAILURE, FETCH_CD_REQUEST, FETCH_CD_SUCCESS } from "./BalanceTypes"

const initialState = {
    loading: false,
    balance: 0.00,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_CD_REQUEST:
            return{
                ...state,
                loading: true
            } 
        case FETCH_CD_SUCCESS:
            return{
                loading: false,
                balance: action.payload,
                error: ''
            }
        case FETCH_CD_FAILURE:
            return {
                loading: false,
                balance: 0,
                error: action.payload,
            }
        default: return state
    }
}

export default reducer