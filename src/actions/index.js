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
export const chapterlist = (result) => ({
    type: 'CHAPTERLIST',
    data: result
});

/**
 * 获取书籍目录
 * @param {*} param 
 */
export const fetchBookList = (params) => {
    return (dispatch, getState) => {
        axios.get(api.url.booklist, {
            params: params
        }).then((res) => {
            dispatch(booklist(res.data.result));
        }).catch((err) => {

        })
    }
}
/**
 * 获取数据具体章节内容
 * @param {*} param key 书籍名 start  开始章节 size 一页显示条数
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
/**
 * 获取数据章节liebiao0
 * @param {*} param key 书籍名 start  开始章节 size 一页显示条数
 */
export const fetchChapterList = (params) => {
    return (dispatch, getState) => {
        axios.get(api.url.chapterlist, {
            params: params
        }).then((res) => {
            dispatch(chapterlist(res.data.result));
        }).catch((err) => {

        })
    }
}