import { combineReducers } from "redux"
import { tfl, bikePoints } from "../../modules/Transport/reducers"

export default combineReducers({
  transport: tfl,
  bike_points: bikePoints
})
