import { combineReducers } from 'redux'
import LoginReducer from './Login/LoginReducer'
import UserReducer from './User/UserReducer'
import CheckingReducer from './Balance/CheckingReducer'
import SavingsReducer from './Balance/SavingsReducer'
import CDReducer from './Balance/CDReducer'

const rootReducer = combineReducers({
    Login: LoginReducer,
    User: UserReducer,
    Checking: CheckingReducer,
    Savings: SavingsReducer,
    CD: CDReducer
})

export default rootReducer