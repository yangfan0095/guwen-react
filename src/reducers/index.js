import {
    combineReducers
} from 'redux'
import {
    counter,
    booklist,
    bookitem
} from './count'

const appReducer = combineReducers({
    counter,
    booklist,
    bookitem
})

export default appReducer