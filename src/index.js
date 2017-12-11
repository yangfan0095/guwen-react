import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
  reducer,applyMiddleware(thunk)
);


ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
