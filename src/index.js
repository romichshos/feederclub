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
// ENHANCING STORE WITH FIREBASE

const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25,
})

const data = ["/screens/1.jpg","/screens/2.jpg","/screens/3.jpg","/screens/4.jpg","/screens/5.jpg","/screens/6.jpg"];

const persistedState = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : [];

const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
    sessionStorage.setItem('state', JSON.stringify(store.getState()));
})


render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
