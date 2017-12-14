import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from '../App';
import Home from '../container/home';
import BookItem from '../container/book';


  const BasicExample = () => (
    <Router>
        <div>
        <Route exact path="/" component={App}/>
        <Route path="/book/:id" component={BookItem}/>
        </div>
    </Router>
)
export default BasicExample
