import React from 'react';
//import 'react-devtools';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import * as actionCreators from "./actions/index";
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25,
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
