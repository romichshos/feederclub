import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore} from 'redux';
import * as actionCreators from "./actions/index";
import {Provider} from 'react-redux';
import rootReducer from './reducers/index'

const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25,
})
const store = createStore(rootReducer, composeEnhancers())

render(
    <Provider store={store}>
        <App isLogin={true} isRegisterForm={false}/>
    </Provider>, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
