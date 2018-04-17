import { combineReducers } from "redux"

import {
  FETCH_TFL,
  FETCH_TFL_SUCCESS,
  FETCH_TFL_FAIL,
  FETCH_BIKEPOINTS,
  FETCH_BIKEPOINTS_SUCCESS,
  FETCH_BIKEPOINTS_FAIL
} from "./actions"

export function tfl(
  state = { items: null, error: null, fetching: false },
  action
) {
  switch (action.type) {
    case FETCH_TFL:
      return { ...state, fetching: true, items: null, error: null }
    case FETCH_TFL_SUCCESS:
      return { ...state, items: action.response, fetching: false }
    case FETCH_TFL_FAIL:
      return { ...state, error: action.error, fetching: false }
    default:
      return state
  }
}

export function bikePoints(
  state = { item: null, error: null, fetching: false },
  action
) {
  switch (action.type) {
    case FETCH_BIKEPOINTS:
      return { ...state, fetching: true, item: null, error: null }
    case FETCH_BIKEPOINTS_SUCCESS:
      return { ...state, item: action.response, fetching: false }
    case FETCH_BIKEPOINTS_FAIL:
      return { ...state, error: action.error, fetching: false }
    default:
      return state
  }
}

export default combineReducers({
  tfl,
  bikePoints
})
