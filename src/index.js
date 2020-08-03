import React from "react"
import ReactDOM from "react-dom"
import App from './App'
import './App.css'
import './fonts/Bangers-Regular.ttf'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <App />, document.getElementById("root")
)

serviceWorker.register();