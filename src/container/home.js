import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import counter from './reducers';
import { connect } from 'react-redux';
import axios from 'axios';
import { add, decrement,fetchBookList } from '../actions';
import logo from '../logo.svg';
import './home.less';

class Home extends Component {
  constructor(){
		super();
		this.state={
			data:null
		}
	}

  addCount = () => {
    this.props.add();
  }
  componentDidMount() {
    this.props.fetchBookList({});
  }
  render() {
    const props = this.props;
    return (
      <div className="home">
        <div className="title">古文目录</div>
        <BookList booklist={ props.booklist }></BookList>
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
          <div className="name">{item.bookName}</div>
          <div className="detail">{item.bookDetail}</div>
        </div>
      )
      )
    }
    </div>
  )
}
const mapStateToProps = (state) => ({
  count: state.counter,
  booklist:state.booklist
});
const mapDispatchToProps = {
  add: add,
  decrement: decrement,
  fetchBookList:fetchBookList
}


Home.propTypes = {
  count: PropTypes.number.isRequired,
  booklist:PropTypes.array.isRequired
}
BookList.propTypes= {
  booklist:PropTypes.array.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
