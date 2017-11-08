import { FETCH_CHARACTERS_SUCCESS } from '../actions/types';

export default function(state = '', action) {
  switch(action.type) {
    case FETCH_CHARACTERS_SUCCESS:
      if (action.payload === undefined) return state;
      return action.payload;
  }
  return state;
}