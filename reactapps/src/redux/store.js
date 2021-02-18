import {
    createStore,
    applyMiddleware,
    compose }            from 'redux';

import { createLogger }  from 'redux-logger';
import rootReducer       from './reducers/index';

const logger = createLogger({
    collapsed: true
});


const middlewares = [];

middlewares.push (logger);

const configureStore = () => {
    return createStore (
        rootReducer,
        compose (applyMiddleware(...middlewares))
    );
};

export default configureStore;
