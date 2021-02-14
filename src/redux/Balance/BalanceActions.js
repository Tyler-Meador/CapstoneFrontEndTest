import { FETCH_CD_FAILURE, FETCH_CD_REQUEST, FETCH_CD_SUCCESS, FETCH_Checking_FAILURE, FETCH_Checking_REQUEST, FETCH_Checking_SUCCESS, FETCH_DBA_FAILURE, FETCH_DBA_REQUEST, FETCH_DBA_SUCCESS, FETCH_REG_FAILURE, FETCH_REG_REQUEST, FETCH_REG_SUCCESS, FETCH_ROLLOVER_FAILURE, FETCH_ROLLOVER_REQUEST, FETCH_ROLLOVER_SUCCESS, FETCH_ROTHIRA_FAILURE, FETCH_ROTHIRA_REQUEST, FETCH_ROTHIRA_SUCCESS, FETCH_SAVINGS_FAILURE, FETCH_SAVINGS_REQUEST, FETCH_SAVINGS_SUCCESS } from "./BalanceTypes"


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

export const fetchDBARequest = () => {
    return{
        type: FETCH_DBA_REQUEST
    }
}

const fetchDBASuccess = dbaBalance => {
    return{
        type: FETCH_DBA_SUCCESS,
        payload: dbaBalance 
    }
}

const fetchDBAFailure = error => {
    return{
        type: FETCH_DBA_FAILURE,
        payload: error
    }
}

export const fetchDBABalance = (token, account) => {
    return dispatch => {
        fetch('http://testbackend-env.eba-nvpykdzp.us-east-2.elasticbeanstalk.com' + '/Me/Balance/' + account, {
            method: 'GET',
            headers: {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*', 'Authorization' : 'Bearer ' + token }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchDBASuccess(data))
        })
        .catch(error => {
            const errorMsg = error.message
           dispatch(fetchDBAFailure(errorMsg))
        })
    }
}

export const fetchRothIRARequest = () => {
    return{
        type: FETCH_ROTHIRA_REQUEST
    }
}

const fetchRothIRASuccess = rothBalance => {
    return{
        type: FETCH_ROTHIRA_SUCCESS,
        payload: rothBalance 
    }
}

const fetchRothIRAFailure = error => {
    return{
        type: FETCH_ROTHIRA_FAILURE,
        payload: error
    }
}

export const fetchRothIRABalance = (token, account) => {
    return dispatch => {
        fetch('http://testbackend-env.eba-nvpykdzp.us-east-2.elasticbeanstalk.com' + '/Me/Balance/' + account, {
            method: 'GET',
            headers: {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*', 'Authorization' : 'Bearer ' + token }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchRothIRASuccess(data))
        })
        .catch(error => {
            const errorMsg = error.message
           dispatch(fetchRothIRAFailure(errorMsg))
        })
    }
}

export const fetchRolloverIRARequest = () => {
    return{
        type: FETCH_ROLLOVER_REQUEST
    }
}

const fetchRolloverIRASuccess = rollBalance => {
    return{
        type: FETCH_ROLLOVER_SUCCESS,
        payload: rollBalance 
    }
}

const fetchRolloverIRAFailure = error => {
    return{
        type: FETCH_ROLLOVER_FAILURE,
        payload: error
    }
}

export const fetchRolloverIRABalance = (token, account) => {
    return dispatch => {
        fetch('http://testbackend-env.eba-nvpykdzp.us-east-2.elasticbeanstalk.com' + '/Me/Balance/' + account, {
            method: 'GET',
            headers: {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*', 'Authorization' : 'Bearer ' + token }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchRolloverIRASuccess(data))
        })
        .catch(error => {
            const errorMsg = error.message
           dispatch(fetchRolloverIRAFailure(errorMsg))
        })
    }
}

export const fetchRegIRARequest = () => {
    return{
        type: FETCH_REG_REQUEST
    }
}

const fetchRegIRASuccess = regBalance => {
    return{
        type: FETCH_REG_SUCCESS,
        payload: regBalance 
    }
}

const fetchRegIRAFailure = error => {
    return{
        type: FETCH_REG_FAILURE,
        payload: error
    }
}

export const fetchRegIRABalance = (token, account) => {
    return dispatch => {
        fetch('http://testbackend-env.eba-nvpykdzp.us-east-2.elasticbeanstalk.com' + '/Me/Balance/' + account, {
            method: 'GET',
            headers: {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*', 'Authorization' : 'Bearer ' + token }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchRegIRASuccess(data))
        })
        .catch(error => {
            const errorMsg = error.message
           dispatch(fetchRegIRAFailure(errorMsg))
        })
    }
}