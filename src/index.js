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

const DEFAULT_STATE = '';

const feelingRating = (state = DEFAULT_STATE, action) => {
    if (action.type === 'SET_FEELING_RATING') {
        return action.payload;
    } else if (action.type === 'RESET_ALL') {
        return DEFAULT_STATE;
    }
    return state;
}

const understandingRating = (state = DEFAULT_STATE, action) => {
    if (action.type === 'SET_UNDERSTANDING_RATING') {
        return action.payload;
    } else if (action.type === 'RESET_ALL') {
        return DEFAULT_STATE;
    }
    return state;
}

const supportRating = (state = DEFAULT_STATE, action) => {
    if (action.type === 'SET_SUPPORT_RATING') {
        return action.payload;
    } else if (action.type === 'RESET_ALL') {
        return DEFAULT_STATE;
    }
    return state;
}

const comments = (state = DEFAULT_STATE, action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    } else if (action.type === 'RESET_ALL') {
        return DEFAULT_STATE;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingRating,
        understandingRating,
        supportRating,
        comments,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
