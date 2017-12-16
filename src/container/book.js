import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchBookItem } from '../actions';
import '../assets/book.less';

class Book extends Component {
  constructor(){
		super();
		this.state={
			data:null,
            start:1,
            size:1
		}
        this.nextChapter = this.nextChapter.bind(this);
	}
    componentDidMount() {
        let params = {
            dbName : this.props.match.params.id,
            start:1,
            size:1
        };
        this.props.dispatch(fetchBookItem(params));
    } 
    /**
     * 获取下一页数据
     */
    nextChapter(no){
        let start = no;
         this.props.dispatch(fetchBookItem({
              dbName : this.props.match.params.id,
              start:no,
              size:this.state.size
         }));
        this.setState({
            start:no
        });
    }

    render(){
        let { book } = this.props;
        let { start } = this.state;
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
                <div className="btn-container" >
                    {
                        start > 1 ? 
                        <a className="action" onClick={ this.nextChapter.bind(this,start - 1)}> 上一章 </a>
                        : null
                    }
                    <a className="action" onClick={ this.nextChapter.bind(this,start + 1)}> 下一章 </a>
                </div>
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
                <span className="title-name">{ data ? data.chapter : null}</span>
                <span>作者 : { data ? data.author : null}</span>
            </div>
            <div className="content">
                {data? filter(data.content) : null}
            </div>
            <div className="translate">
                {data? filter(data.translate) : null}
            </div>
        </div>
    )
}

Book.propTypes= {
  book:PropTypes.array.isRequired,
  pagination:PropTypes.object.isRequired,
}


const mapStateToProps = (state) => ({
  book: state.bookitem.list,
  pagination:state.bookitem.pagination

});
export default connect(
  mapStateToProps,
)(Book)
