import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import App from '../App';
import Header from '../components/header';
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
          {/*{
            routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))
          }*/}
          
           <div className="App">
              <Header></Header>
              <div className="content">
                <Switch>
                  <Route exact path="/" component = {Home}></Route>
                  <Route path="/home" component = {Home}></Route>
                  <Route path="/book/:id" component = {BookItem}></Route>
                  <Route path="**" component = {Home}></Route>
                   </Switch>
              </div>
          </div>
        </div>
    </Router>
)
export default BasicExample
