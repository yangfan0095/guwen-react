import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchBookItem } from '../actions';
import  Button  from 'react-toolbox/lib/button';
import '../assets/book.less';

class Book extends Component {
  constructor(){
		super();
		this.state={
			data:null
		}
	}
    componentDidMount() {
        let params = {
            dbName : this.props.match.params.id,
            start:1,
            size:1
        };
        this.props.dispatch(fetchBookItem(params));
    }

    render(){
        let { book } = this.props;
        book = book ? book : [];
        let getChapter = (book) =>{
            if(book.length === 0){
                return <div>123</div>
            }
            console.log(book);
            book= [1,3,4]
            return (
                <div>
                    {
                        book.map( (item, index ) =>{
                            <span>{ item }</span>
                            {/*<BookChapter dataChapter={ item } key={ 'bookName' + index }></BookChapter>*/}
                        })
                    }
                </div>
            )
        }
        return (
            <div className="book-container">
               {
                        book.map( (item, index ) =>(
                           
                            <BookChapter dataChapter={ item } key={ 'bookName' + index }></BookChapter>
                          
                        ))
                }
                <Button label="Hello World!" />
            </div>
        )
    }
}

//
const BookChapter = ({dataChapter}) =>{
    let data = dataChapter;
    /**
     * 过滤脏数据
     * @param {*} str 
     */
    const filter = (str)=>{
        return str.replace(/<br\/>/g,'');
    }
    return (
        <div className="chapter-container">
            <div className="title">{data ? data.name : null}</div>
            <div className="book-info">
                <span>{ data ? data.chapter : null}</span>
                <span>作者 : { data ? data.author : null}</span>
            </div>
            <div className="content">
                {data? filter(data.content) : null}
            </div>
        </div>
    )
}

Book.propTypes= {
  book:PropTypes.array.isRequired
}


const mapStateToProps = (state) => ({
  book: state.bookitem,
});
export default connect(
  mapStateToProps,
)(Book)
