import axios from 'axios';
import api from '../services/api';
export const add = () => ({
    type: 'INCREMENT',
});
export const decrement = () => ({
    type: 'DECREMENT',
});
export const booklist = (result) => ({
    type: 'BOOKLIST',
    data: result
});

export const fetchBookList = (param) => {
    return (dispatch, getState) => {
        axios.get(api.url.booklist).then((res) => {
            dispatch(booklist(res.data.title));
        }).catch((err) => {

        })
    }
}