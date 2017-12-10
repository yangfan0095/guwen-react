import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import counter from './reducers';
import { connect } from 'react-redux';
import axios from 'axios';
import { add, decrement } from './actions';
import api from './services/api';
import logo from './logo.svg';
import './home.less';

class Home extends Component {

  addCount = () => {
    this.props.add();
  }
  componentDidMount() {
    axios.get(api.url.booklist).then((res) => {
      
    }).catch((err) => {
      console.log(err.status);
    })
  }
  render() {
    const props = this.props;
    return (
      <div className="home">
        <div className="title">create a react app</div>
        <div>{props.count}</div>
        <div onClick={this.addCount.bind(this)}>add</div>
        <div onClick={props.decrement}>decrement</div>
      </div>
    );
  }

}
/*const Home = (props) =>{
   let  addCount =()=>{
        props.add();
    };
     return (
      <div className="home">
        <div className="title">create a react app</div>
        {console.log(props)}
        <div>{props.count}</div>
        <div onClick={addCount}>add</div>
        <div onClick={props.decrement}>decrement</div>
      </div>
    );
}*/





const mapStateToProps = (state) => ({
  count: state.count,
});
const mapDispatchToProps = {
  add: add,
  decrement: decrement
}


Home.propTypes = {
  count: PropTypes.number.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
