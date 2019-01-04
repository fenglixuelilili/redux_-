import React from "react"
import ReactDom from "react-dom"
import App from "./App.js"
import {Provider} from "react-redux"
import {createStore} from "redux"
import Tstore from "./reducer/index.js"
const store = createStore(Tstore)
ReactDom.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.querySelector('#app-container')
)
