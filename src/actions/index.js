import axios from 'axios';
export const add = () => ({
    type: 'INCREMENT',
});
export const decrement = () => ({
    type: 'DECREMENT',
});
export const booklist =(result)=>({
    type:'BOOKLIST',
    data:result
});

const fetchBookList = (param) => {
    axios.get(api.url.booklist).then((res) => {
        
    }).catch((err)=>{

    })
}