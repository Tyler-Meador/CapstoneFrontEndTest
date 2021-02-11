import { FETCH_CD_FAILURE, FETCH_CD_REQUEST, FETCH_CD_SUCCESS, FETCH_Checking_FAILURE, FETCH_Checking_REQUEST, FETCH_Checking_SUCCESS, FETCH_SAVINGS_FAILURE, FETCH_SAVINGS_REQUEST, FETCH_SAVINGS_SUCCESS } from "./BalanceTypes"


export const fetchCheckingRequest = () => {
    return{
        type: FETCH_Checking_REQUEST
    }
}

const fetchCheckingSuccess = checkingBalance => {
    return{
        type: FETCH_Checking_SUCCESS,
        payload: checkingBalance 
    }
}

const fetchCheckingFailure = error => {
    return{
        type: FETCH_Checking_FAILURE,
        payload: error
    }
}

export const fetchCheckingBalance = (token, account) => {
    return dispatch => {
        fetch('http://testbackend-env.eba-nvpykdzp.us-east-2.elasticbeanstalk.com' + '/Me/Balance/' + account, {
            method: 'GET',
            headers: {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*', 'Authorization' : 'Bearer ' + token }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchCheckingSuccess(data))
        })
        .catch(error => {
            const errorMsg = error.message
           dispatch(fetchCheckingFailure(errorMsg))
        })
    }
}

export const fetchSavingsRequest = () => {
    return{
        type: FETCH_SAVINGS_REQUEST
    }
}

const fetchSavingsSuccess = savingsBalance => {
    return{
        type: FETCH_SAVINGS_SUCCESS,
        payload: savingsBalance 
    }
}

const fetchSavingsFailure = error => {
    return{
        type: FETCH_SAVINGS_FAILURE,
        payload: error
    }
}

export const fetchSavingsBalance = (token, account) => {
    return dispatch => {
        fetch('http://testbackend-env.eba-nvpykdzp.us-east-2.elasticbeanstalk.com' + '/Me/Balance/' + account, {
            method: 'GET',
            headers: {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*', 'Authorization' : 'Bearer ' + token }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchSavingsSuccess(data))
        })
        .catch(error => {
            const errorMsg = error.message
           dispatch(fetchSavingsFailure(errorMsg))
        })
    }
}

export const fetchCDRequest = () => {
    return{
        type: FETCH_CD_REQUEST
    }
}

const fetchCDSuccess = cdBalance => {
    return{
        type: FETCH_CD_SUCCESS,
        payload: cdBalance 
    }
}

const fetchCDFailure = error => {
    return{
        type: FETCH_CD_FAILURE,
        payload: error
    }
}

export const fetchCDBalance = (token, account) => {
    return dispatch => {
        fetch('http://testbackend-env.eba-nvpykdzp.us-east-2.elasticbeanstalk.com' + '/Me/Balance/' + account, {
            method: 'GET',
            headers: {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*', 'Authorization' : 'Bearer ' + token }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchCDSuccess(data))
        })
        .catch(error => {
            const errorMsg = error.message
           dispatch(fetchCDFailure(errorMsg))
        })
    }
}