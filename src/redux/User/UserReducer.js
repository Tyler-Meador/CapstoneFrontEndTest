import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, LOGOUT } from "./UserTypes"


const initialState = {
    userLoaded: false,
    loading: false,
    user: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading: true
            } 
        case FETCH_USER_SUCCESS:
            return{
                userLoaded:true,
                loading: false,
                user: action.payload,
                error: ''
            }
        case FETCH_USER_FAILURE:
            return {
                userLoaded: false,
                loading: false,
                user: [],
                error: action.payload,
            }
        case LOGOUT:
            return{
                userLoaded: false,
                loading: false,
                user: [],
                error: ''
            }

        default: return state
    }
}

export default reducer