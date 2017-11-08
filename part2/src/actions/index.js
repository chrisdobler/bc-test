import { 
  UPDATE_QUERY, 
  FETCH_CHARACTERS_SUCCESS ,
  TRIM_QUERY
} from './types';

export function updateQuery(query) {
  return {
    type: UPDATE_QUERY,
    payload: query
  };
}

export function trimQuery(query) {
  return {
    type: TRIM_QUERY,
    payload: query
  };
}

export function fetchCharactersSuccess(query) {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: query
  }
}