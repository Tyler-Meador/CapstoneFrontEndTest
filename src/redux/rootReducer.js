import { combineReducers } from 'redux'
import LoginReducer from './Login/LoginReducer'
import UserReducer from './User/UserReducer'
import CheckingReducer from './Balance/CheckingReducer'
import SavingsReducer from './Balance/SavingsReducer'
import CDReducer from './Balance/CDReducer'
import TransactionReducer from './Transaction/TransactionReducer'
import DbaReducer from './Balance/DbaReducer'
import RegReducer from './Balance/RegReducer'
import RolloverReducer from './Balance/RolloverReducer'
import RothReducer from './Balance/RothReducer'


const rootReducer = combineReducers({
    Login: LoginReducer,
    User: UserReducer,
    Checking: CheckingReducer,
    Savings: SavingsReducer,
    CD: CDReducer,
    Transaction: TransactionReducer,
    DBA: DbaReducer,
    Reg: RegReducer,
    Roll: RolloverReducer,
    Roth: RothReducer
})

export default rootReducer