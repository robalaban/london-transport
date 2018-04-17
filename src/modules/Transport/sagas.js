import axios from "axios"
import { BASE_URL } from "../../utils/const"
import { takeEvery, call, put } from "redux-saga/effects"

import {
  FETCH_TFL,
  fetchTflSuccess,
  fetchTflError,
  FETCH_BIKEPOINTS,
  fetchBikePointsSuccess,
  fetchBikePointsError
} from "./actions"

const requestGetTfl = () =>
  axios
    .get(`${BASE_URL}Line/Mode/tube,overground,dlr/Status?detail=true`)
    .then(response => ({ response }))
    .catch(error => ({ error }))

function* getTfl() {
  const { response, error } = yield call(requestGetTfl)
  if (response) {
    yield put(fetchTflSuccess(response))
  } else yield put(fetchTflError(error))
}

export function* tflWatcher() {
  yield takeEvery(FETCH_TFL, getTfl)
}

const requestGetBikePoints = value =>
  axios
    .get(`${BASE_URL}BikePoint/Search?query=${value}/`)
    .then(response => ({ response }))
    .catch(error => ({ error }))

function* getBikePoints() {
  const { response, error } = yield call(requestGetBikePoints)
  if (response) {
    yield put(fetchBikePointsSuccess(response))
  } else yield put(fetchBikePointsError(error))
}

export function* bikePointsWatcher() {
  yield takeEvery(FETCH_BIKEPOINTS, getBikePoints)
}
