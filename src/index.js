import React from 'react';
import ReactDOM from 'react-dom';
import './css/search.css';
import App from './App.js'
import {createStore} from 'redux';
import allReducers from './reducers'
import {Provider} from 'react-redux';

//creating the store with all reducers and adding redux dev tools extension
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root')
);



