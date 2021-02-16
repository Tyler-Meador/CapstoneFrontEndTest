import { FETCH_TRANSACTION_FAILURE, FETCH_TRANSACTION_REQUEST, FETCH_TRANSACTION_SUCCESS, LOADING } from "./TransactionTypes"

export const fetchTransactionRequest = () => {
    return{
        type: FETCH_TRANSACTION_REQUEST
    }
}

const fetchTransactionSuccess = transaction => {
    return{
        type: FETCH_TRANSACTION_SUCCESS,
        payload: transaction 
    }
}

const fetchTransactionFailure = error => {
    return{
        type: FETCH_TRANSACTION_FAILURE,
        payload: error
    }
}


export const fetchTransaction = (transaction, token) => {
    return dispatch => {
        dispatch(fetchTransactionRequest())
        fetch('http://testbackend-env.eba-nvpykdzp.us-east-2.elasticbeanstalk.com' + '/User/Transaction', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*', 'Authorization' : 'Bearer ' + token },
            body: JSON.stringify(transaction)
        })
        .then((response) =>{
            if(response.ok){
                return response.json();
            }
            return Promise.reject(response);
        })
        .then(data => {
            if(!data.transactionSuccess){
                dispatch(fetchTransactionFailure("Transaction Failed"))
            }
            else{
                dispatch(fetchTransactionSuccess(data))
            }
            
        })
    }
}

