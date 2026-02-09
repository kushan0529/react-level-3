import {createStore, combineReducers}from 'redux'
import countReducer from '../reducers/countReducer'
import numberReducer from '../reducers/numberReducer'

const configStore=()=>{
    const state=createStore(combineReducers({
        count:countReducer,
        numbers:numberReducer
    }))
    return state
}

export default configStore