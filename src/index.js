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

/** ---------- DEFAULT VALUE CONSTANTS ---------- **/
const DEFAULT_RATING = null;
const DEFAULT_COMMENTS = '';

/** ---------- REDUCERS ---------- **/

// User's current rating of their emotional state
const feeling = (state = DEFAULT_RATING, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    } else if (action.type === 'RESET_ALL') {
        return DEFAULT_RATING;
    }
    return state;
}

// User's current rating of their understanding and comprehension
const understanding = (state = DEFAULT_RATING, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'RESET_ALL') {
        return DEFAULT_RATING;
    }
    return state;
}

// User's current rating of the support they are recieving
const support = (state = DEFAULT_RATING, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    } else if (action.type === 'RESET_ALL') {
        return DEFAULT_RATING;
    }
    return state;
}

// User's comments
const comments = (state = DEFAULT_COMMENTS, action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    } else if (action.type === 'RESET_ALL') {
        return DEFAULT_COMMENTS;
    }
    return state;
}

// Store all the reducers using combine reducers
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
