import { all } from "redux-saga/effects"
import { tflWatcher, bikePointsWatcher } from "../../modules/Transport/sagas"
export default function* rootSaga() {
  yield all([tflWatcher(), bikePointsWatcher()])
}
