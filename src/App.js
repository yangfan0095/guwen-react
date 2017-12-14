import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RouteWithSubRoutes from './components/routewithsubroutes';
class App extends Component {
  render() {
    window.scrollTo(0, 0);
    const routes = this.props.routes;
    return (
      <div className="App">
       {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};
export default App;
