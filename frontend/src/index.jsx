import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App.jsx"

const elem = document.createElement("div")
document.body.appendChild(elem)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  elem
)
