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

const DEFAULT_RATING = null;
const DEFAULT_COMMENTS = '';

const feeling = (state = DEFAULT_RATING, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    } else if (action.type === 'RESET_ALL') {
        return DEFAULT_RATING;
    }
    return state;
}

const understanding = (state = DEFAULT_RATING, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'RESET_ALL') {
        return DEFAULT_RATING;
    }
    return state;
}

const support = (state = DEFAULT_RATING, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    } else if (action.type === 'RESET_ALL') {
        return DEFAULT_RATING;
    }
    return state;
}

const comments = (state = DEFAULT_COMMENTS, action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    } else if (action.type === 'RESET_ALL') {
        return DEFAULT_COMMENTS;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
