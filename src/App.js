import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RouteWithSubRoutes from './components/routewithsubroutes';
import Header from './components/header';
import './assets/app.less';
class App extends Component {
  render() {
    window.scrollTo(0, 0);
    const routes = this.props.routes;
    return (
      <div className="App">
      <Header></Header>
      <div className="content">
       {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
       </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};
export default App;
