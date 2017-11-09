import { combineReducers } from 'redux';
import queryReducer from './query';
import selectionReducer from './selection';
import planetReducer from './planet';

const rootReducer = combineReducers({
  query: queryReducer,
  selection: selectionReducer,
  planet: planetReducer
});

export default rootReducer;
