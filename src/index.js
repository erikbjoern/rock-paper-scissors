import React from "react"
import ReactDOM from "react-dom"
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import './App.css'
import './fonts/Bangers-Regular.ttf'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
        <App />, document.getElementById("root")
)

serviceWorker.register();