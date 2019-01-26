// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const feelingsRating = (state = 0, action) => {
    if (action.type === 'SET_FEELINGS_RATING') {
        return action.payload;
    }
    return state;
}

const understandingRating = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING_RATING') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingsRating,
        understandingRating,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
