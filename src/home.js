import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import AMUIReact  from 'amazeui-react';
// import counter from './reducers';
import { connect } from 'react-redux';
import { add, decrement} from './actions';
import logo from './logo.svg';
import './home.less';
const Home = (props) =>{
   let  addCount =()=>{
        props.add();
    };
     return (
      <div className="home">
        <div className="title">create a react app</div>
        <div>{props.count}</div>
        <div onClick={addCount}>add</div>
        <div onClick={props.decrement}>decrement</div>
      </div>
    );
}

const mapStateToProps = (state) => ({
  count: state.count,
});
const mapDispatchToProps ={
    add:add,
    decrement:decrement
}


Home.propTypes = {
  count: PropTypes.number.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
