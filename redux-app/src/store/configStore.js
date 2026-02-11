import {createStore, combineReducers,applyMiddleware}from 'redux'
import {thunk} from 'redux-thunk'
import countReducer from '../reducers/countReducer'
import numberReducer from '../reducers/numberReducer'
import { userReducer } from '../reducers/userReducer'

const configStore=()=>{
    const state=createStore(combineReducers({
        count:countReducer,
        numbers:numberReducer,
        users:userReducer
    }),applyMiddleware(thunk))
    return state
}

export default configStore