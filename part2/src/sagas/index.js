/* eslint-disable no-constant-condition */

import { take, takeEvery, takeLatest, put, call, fork, select } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import * as actions from '../actions'
import { 
  UPDATE_QUERY, 
  FETCH_CHARACTERS_SUCCESS,
  FETCH_PERSON,
  FETCH_PERSON_SUCCESS,
  FETCH_PLANET,
  FETCH_PLANET_SUCCESS
} from '../actions/types';

const API_URL = 'https://swapi.co/api';

export function fetchCharactersApi(query) {
  return fetch(`${API_URL}/people/?search=${query.payload}` )
    .then(response => response.json() )
    .then(json => {
      if(json.results.length > 0)
        return json.results[0];
    });
}
function* fetchCharacters(query) {
  const payload = yield call(fetchCharactersApi, query)
  // create and yield a dispatch Effect
  yield put({ type: FETCH_CHARACTERS_SUCCESS, payload })
}

export function fetchPersonApi(query) {
  return fetch(`${API_URL}/people/${query.payload}/` )
    .then(response => response.json() )
    .then(json => json);
}
function* fetchPerson(query) {
  const payload = yield call(fetchPersonApi, query)
  // create and yield a dispatch Effect
  yield put({ type: FETCH_PERSON_SUCCESS, payload })
}


//-----------   Watchers    -----------------------------------//

export function* watchFetchCharacters() {
  yield takeEvery(UPDATE_QUERY, fetchCharacters)
}

export function* watchFetchPerson() {
  yield takeEvery(FETCH_PERSON, fetchPerson)
}

export function* startup() {
}

export default function* root() {
  yield fork(startup)
  yield fork(watchFetchCharacters)
  yield fork(watchFetchPerson)
}
