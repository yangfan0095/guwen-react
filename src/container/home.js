import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
// import counter from './reducers';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'
import axios from 'axios';
import { add, decrement,fetchBookList } from '../actions';
import logo from '../logo.svg';
import '../assets//home.less';

class Home extends Component {
  constructor(){
		super();
		this.state={
			data:null,
      page:1,// 当前加载页
      size:20,//每次请求条数
		}
    this.loadMore = this.loadMore.bind(this);// 加载更多
	}

  addCount = () => {
    this.props.add();
  }
  componentDidMount() {
    this.props.fetchBookList({page:this.state.page,size:this.state.size});
  }
  loadMore(no){
    this.props.fetchBookList({page:no,size:this.state.size});
    this.setState({page:no});
  }
  render() {
    const props = this.props;
    let { list ,pagination} = this.props;
    let { page } = this.state;
    return (
        <div className="home">
        <div className="title">古文目录</div>
        <BookList booklist={ props.booklist }></BookList>
         <div className="btn-container" >
         <a className="action" onClick={ this.loadMore.bind(this,page + 1)} > 加载更多... </a>
        </div>
      </div>
    );
  }

}
/**
 * 数据目录 组件
 * @param {*} param0 
 */
const BookList = ({booklist})=>{

  return (
    <div className="book-list">
    {
      booklist.map((item,index) =>(
        <div className="book-list-item" key= { 'bookindex' + index}>
          <div  > <Link  className="name" to={`/book/${item.key}`}>{item.bookName} </Link> </div>
          <div className="detail" >{item.bookDetail}</div>
        </div>
      )
      )
    }
    </div>
  )
}
const mapStateToProps = (state) => ({
  count: state.counter,
  booklist:state.booklist.list,
  pagination:state.booklist.pagination
});
const mapDispatchToProps = {
  add: add,
  decrement: decrement,
  fetchBookList:fetchBookList
}


Home.propTypes = {
  count: PropTypes.number.isRequired,
  booklist:PropTypes.array.isRequired,
  pagination:PropTypes.object.isRequired,
}
BookList.propTypes= {
  booklist:PropTypes.array.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
