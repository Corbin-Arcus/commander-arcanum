import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import cardReducer from './card';
// import deckReducer from './reducers/deckReducer';

const rootReducer = combineReducers({
  card: cardReducer,
//   deck: deckReducer,
});

let enchancer;

if (process.env.NODE_ENV === 'production') {
    enchancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enchancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enchancer);
};

export default configureStore;