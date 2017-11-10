import { combineReducers } from 'redux';
import queryReducer from './query';
import selectionReducer from './selection';
import planetReducer from './planet';
import imageReducer from './image';

const rootReducer = combineReducers({
  query: queryReducer,
  selection: selectionReducer,
  planet: planetReducer,
  image: imageReducer,
});

export default rootReducer;
