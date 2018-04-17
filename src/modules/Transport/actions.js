export const FETCH_TFL = "FETCH_TFL"
export const fetchTfl = () => ({ type: FETCH_TFL })

export const FETCH_TFL_SUCCESS = "FETCH_TFL_SUCCESS"
export const fetchTflSuccess = response => ({
  type: FETCH_TFL_SUCCESS,
  response
})

export const FETCH_TFL_FAIL = "FETCH_TFL_FAIL"
export const fetchTflError = error => ({ type: FETCH_TFL_FAIL, error })

export const FETCH_BIKEPOINTS = "FETCH_BIKEPOINTS"
export const fetchBikePoints = value => ({ type: FETCH_BIKEPOINTS, value })

export const FETCH_BIKEPOINTS_SUCCESS = "FETCH_BIKEPOINTS_SUCCESS"
export const fetchBikePointsSuccess = response => ({
  type: FETCH_BIKEPOINTS_SUCCESS,
  response
})

export const FETCH_BIKEPOINTS_FAIL = "FETCH_BIKEPOINTS_FAIL"
export const fetchBikePointsError = error => ({
  type: FETCH_BIKEPOINTS_FAIL,
  error
})
