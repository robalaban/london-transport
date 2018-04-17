import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import configureStore from "./config/store"
import App from "./modules/Entry/App"
import registerServiceWorker from "./registerServiceWorker"

export const store = configureStore().store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
