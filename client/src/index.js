import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles/global';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'),
);
