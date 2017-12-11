import {
    combineReducers
} from 'redux'
import {
    counter,
    booklist
} from './count'

const appReducer = combineReducers({
    counter,
    booklist
})

export default appReducer