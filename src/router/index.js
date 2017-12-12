import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from '../App';
import Home from '../container/home';


  const BasicExample = () => (
    <Router>
        <div>
        <Route exact path="/" component={App}/>
        <Route path="/home" component={Home}/>
        </div>
    </Router>
)
export default BasicExample
