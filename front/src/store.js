import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const inititalState = {};
const middleware = [thunk];

const store = createStore(
        rootReducer, 
        inititalState, 
        compose(
                applyMiddleware(...middleware)
        )
);

export default store;