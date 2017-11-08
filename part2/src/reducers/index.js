import { combineReducers } from 'redux';
import queryReducer from './query';
import selectionReducer from './selection';

const rootReducer = combineReducers({
  query: queryReducer,
  selection: selectionReducer
});

export default rootReducer;
