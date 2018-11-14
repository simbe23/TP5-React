import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import counterReducer from './reducers/counter';
import totalReducer from './reducers/total'


const rootReducer = combineReducers({
  counter: counterReducer,
  total: totalReducer,

});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // devToolsEnhancer(),
  ),
);

export default store;
