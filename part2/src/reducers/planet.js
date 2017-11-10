import { FETCH_PLANET_SUCCESS } from '../actions/types';

export default function (state = '', action) {
  switch (action.type) {
    case FETCH_PLANET_SUCCESS:
      if (action.payload === undefined) return state;
      return action.payload;
  }
  return state;
}
