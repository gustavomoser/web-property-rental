import React, { useState } from "react"
import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login.jsx"
import { Route, BrowserRouter } from "react-router-dom"
import ResetPassword from "./pages/resetPassword/ResetPassword.jsx"

export const defaultInfo = {
  logged: false,
  username: undefined,
  name: undefined,
  first: undefined,
}

export default function App() {
  const [info, setInfo] = useState(defaultInfo)

  const renderHome = () => {
    return <Home info={info} setInfo={setInfo} />
  }

  const renderLogin = () => {
    return <Login setInfo={setInfo} />
  }

  const renderReset = () => {
    return <ResetPassword info={info} setInfo={setInfo} />
  }

  return (
    <div>
      <BrowserRouter>
        <Route component={renderHome} path="/" exact />
        <Route component={renderLogin} path="/login" exact />
        <Route component={renderReset} path="/reset" exact />
      </BrowserRouter>
    </div>
  )
}
