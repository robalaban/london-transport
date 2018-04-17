import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas"
import rootReducer from "./reducers"

const initialState = {}

export default () => {
  let store = null
  let middleware = null

  const sagaMiddleware = createSagaMiddleware()
  middleware = applyMiddleware(sagaMiddleware)

  // Create store with initial state if it exists
  store = createStore(rootReducer, initialState, middleware)

  // Run root saga
  sagaMiddleware.run(rootSaga)

  // Return store only
  // But as an object for consistency
  return {
    store
  }
}
