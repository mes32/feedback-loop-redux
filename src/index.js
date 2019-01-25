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

const dummyReducer = (state = [], action) => {
    return state;
}

const storeInstance = createStore(
    combineReducers({
        dummyReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
