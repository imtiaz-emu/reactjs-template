import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import stateReducer from './reducer';

const store = createStore(
  stateReducer,
  {
    appState: {}
  },
  applyMiddleware(logger)
);

export default store;
