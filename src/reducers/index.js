import { combineReducers } from 'redux'
import count from './count'

const appReducer = combineReducers({
    count,
})

export default appReducer
