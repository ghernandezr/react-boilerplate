import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-intl-redux';
import { ConnectedRouter } from 'connected-react-router';

import { configureAppStore, history } from './store';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const initialState = {};
const store = configureAppStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
