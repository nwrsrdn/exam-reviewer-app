import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { BrowserRouter } from "react-router-dom";

import App from './containers/App';
import { requestReviewer } from "./reducers";

import reportWebVitals from './reportWebVitals';
import 'tachyons'

const logger = createLogger()
const rootReducer = combineReducers({ requestReviewer })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
