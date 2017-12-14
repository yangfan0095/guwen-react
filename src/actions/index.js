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
export const bookitem = (result) => ({
    type: 'BOOKITEM',
    data: result
});

/**
 * 获取书籍目录
 * @param {*} param 
 */
export const fetchBookList = (param) => {
    return (dispatch, getState) => {
        axios.get(api.url.booklist).then((res) => {
            dispatch(booklist(res.data.title));
        }).catch((err) => {

        })
    }
}
/**
 * 获取数据具体章节内容
 * @param {*} param dbName 书籍名 start  开始章节 size 一页显示条数
 */
export const fetchBookItem = (params) => {
    return (dispatch, getState) => {
        axios.get(api.url.bookitem, {
            params: params
        }).then((res) => {
            dispatch(bookitem(res.data.result));
        }).catch((err) => {

        })
    }
}