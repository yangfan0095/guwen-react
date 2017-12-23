import {
    combineReducers
} from 'redux'
import {
    counter,
    booklist,
    bookitem,
    chapterlist
} from './count'

const appReducer = combineReducers({
    counter,
    booklist,
    bookitem,
    chapterlist
})

export default appReducer