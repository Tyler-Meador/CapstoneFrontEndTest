import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, LOGOUT } from "./LoginTypes"

const initialState = {
    loading: false,
    token: '',
    isLoggedIn: false,
    loginStatus: 'LOGIN',
    error: '',
    test: '/login',
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_LOGIN_REQUEST:
            return{
                ...state,
                loading: true
            } 
        case FETCH_LOGIN_SUCCESS:
            return{
                loading: false,
                token: action.payload,
                isLoggedIn: true,
                loginStatus: 'LOGOUT',
                error: '',
                test: '/logout',
            }
        case FETCH_LOGIN_FAILURE:
            return {
                loading: false,
                token: '',
                error: action.payload,
                isLoggedIn: false,
                loginStatus: 'LOGIN',
                test: '/login'
            }
        case LOGOUT:
            return{
                loading: false,
                token: '',
                error: '',
                isLoggedIn: false,
                loginStatus: 'LOGIN',
                test: '/login'
            }
        default: return state
    }
}

export default reducer