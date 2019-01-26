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

const feelingsRating = (state = null, action) => {
    if (action.type === 'SET_FEELINGS_RATING') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingsRating,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
