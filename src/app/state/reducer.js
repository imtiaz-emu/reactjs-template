import {combineReducers} from 'redux';
import states from './states/index';

export default combineReducers({
  appState: combineReducers(states)
});
