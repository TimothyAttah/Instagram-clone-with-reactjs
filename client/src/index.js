import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Globalstyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Globalstyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
