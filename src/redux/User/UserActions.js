import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, LOGOUT } from "./UserTypes"


export const fetchUserRequest = () => {
    return{
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = user => {
    return{
        type: FETCH_USER_SUCCESS,
        payload: user 
    }
}

const fetchUserFailure = error => {
    return{
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const logoutUser = () => {
    return{
        type: LOGOUT
    }
}

export const fetchUser = token => {
    return dispatch => {
        fetch('http://testbackend-env.eba-nvpykdzp.us-east-2.elasticbeanstalk.com' + '/User', {
            method: 'GET',
            headers: {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*', 'Authorization' : 'Bearer ' + token }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchUserSuccess(data))
        })
        .catch(error => {
            const errorMsg = error.message
           dispatch(fetchUserFailure(errorMsg))
        })
    }
}

export const userLogout = () => {
    return dispatch => {
        dispatch(logoutUser)
    }
}