import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchBookItem ,fetchChapterList} from '../actions';
import * as formatContent from '../utils/genhtml';
import '../assets/book.less';

class Book extends Component {
  constructor(){
		super();
		this.state={
			data:null,
            start:1,
            size:1,
            chapter:null,//当前章节名称
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
        this.props.dispatch(fetchChapterList({ dbName : this.props.match.params.id }));
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
        let { book,chapterlist } = this.props;
        let { start } = this.state;
        let chapterSetList = [...new Set(chapterlist)];
        console.log(chapterSetList);
        console.log(new Set(chapterlist));
        return (
            <div className="book-container">
               {
                        book.map( (item, index ) =>(
                           
                            <BookChapter dataChapter={ item } key={ 'bookName' + index }></BookChapter>
                          
                        ))
                }
                <div className="chapter-list">
                  {/*<ChapterList list={chapterSetList }></ChapterList>*/}
                </div>
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
// 生成Html
const getWbContent = (content) => {
  return <div dangerouslySetInnerHTML={formatContent.createMarkup(content)}/>;
}

// 章节列表
 const ChapterList = ({list}) =>{
            return (
                <div>
                    {
                        list.map( (item, index ) =>(
                            <span key={'chapter' + index}>{ item.chapter }</span>
                        ))
                    }
                </div>
            )
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
            <div className="book-content">
                <div className="content-title">正文：</div>
                {data? getWbContent(data.content) : null}
            </div>
            <div className="translate">
                 
                {data? 
                <div>
                    <div className="content-title">译文：</div>
                    {getWbContent(data.translate) }
                </div>
                : null}
            </div>
        </div>
    )
}

Book.propTypes= {
  book:PropTypes.array.isRequired,
  pagination:PropTypes.object.isRequired,
  chapterlist:PropTypes.array.isRequired
}


const mapStateToProps = (state) => ({
  book: state.bookitem.list,
  pagination:state.bookitem.pagination,
  chapterlist:state.chapterlist
});
export default connect(
  mapStateToProps,
)(Book)
