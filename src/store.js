import { createStore, applyMiddleware, compose } from 'redux';
// import saga from 'redux-saga';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;