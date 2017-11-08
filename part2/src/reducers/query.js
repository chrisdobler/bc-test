import { UPDATE_QUERY, FETCH_CHARACTERS_SUCCESS, TRIM_QUERY } from '../actions/types';

export default function(state = '', action) {
  switch(action.type) {
    case FETCH_CHARACTERS_SUCCESS:
      if (action.payload === undefined) return state;
      return action.payload.name;
    case UPDATE_QUERY:
    case TRIM_QUERY:
      return action.payload;
  }
  return state;
}