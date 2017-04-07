import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import messages from './reducers/messages';
import AppComponent from './AppComponent';

const store = createStore(messages);
require('./styles/main.css');

ReactDom.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>
  , document.getElementById('SeacatApp'));
