import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import App from '../App';
import Home from '../container/home';
import BookItem from '../container/book';
import RouteWithSubRoutes from '../components/routewithsubroutes';


const routes = [
  {
    path:'/',
    component:App,
    routes:[
      {path:'/home',component:Home},
      {path:'/book/:id',component:BookItem},
      // {path: '/',component: Home}
    ]
  }
];



  const BasicExample = () => (
    <Router>
        <div>
          {
            routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))
          }
        </div>
    </Router>
)
export default BasicExample
