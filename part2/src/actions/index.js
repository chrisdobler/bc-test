import { 
  UPDATE_QUERY, 
  FETCH_CHARACTERS_SUCCESS ,
  TRIM_QUERY,
  FETCH_PERSON,
  FETCH_PERSON_SUCCESS,
  FETCH_PLANET,
  FETCH_PLANET_SUCCESS
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

export function fetchPerson(id) {
  return {
    type: FETCH_PERSON,
    payload: id
  };
}

export function fetchPersonSuccess(person) {
  return {
    type: FETCH_PERSON,
    payload: person
  };
}