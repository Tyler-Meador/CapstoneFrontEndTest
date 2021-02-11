import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, LOGOUT } from "./LoginTypes"

export const fetchLoginRequest = () => {
    return{
        type: FETCH_LOGIN_REQUEST
    }
}

const fetchLoginSuccess = token => {
    return{
        type: FETCH_LOGIN_SUCCESS,
        payload: token 
    }
}

const fetchLoginFailure = error => {
    return{
        type: FETCH_LOGIN_FAILURE,
        payload: error
    }
}

const logoutUser = () => {
    return{
        type: LOGOUT
    }
}

export const fetchToken = values => {
    return dispatch => {
        fetch('http://testbackend-env.eba-nvpykdzp.us-east-2.elasticbeanstalk.com' + '/authenticate', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                username: values.username,
                password: values.password
            })
        })
        .then((response) =>{
            if(response.ok){
                return response.json();
            }
            return Promise.reject(response);
        })
        .then(data => {
            dispatch(fetchLoginSuccess(data.jwt))
        })
        .catch(error => {
            const errorMsg = error.message
           dispatch(fetchLoginFailure(errorMsg))
        })
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(logoutUser)
    }
}