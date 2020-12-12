import React, { useState } from "react"
import { Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login.jsx"
import ResetPassword from "./pages/resetPassword/ResetPassword.jsx"
import AddProperty from "./pages/property/AddProperty.jsx"
import Interests from "./pages/interests/Interests.jsx"

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

  const renderAddProperty = () => {
    return <AddProperty info={info} setInfo={setInfo} />
  }

  const renderInterests = () => {
    return <Interests info={info} setInfo={setInfo} />
  }

  return (
    <BrowserRouter>
      <Route component={renderHome} path="/interests" exact />
      <Route component={renderLogin} path="/login" exact />
      <Route component={renderReset} path="/reset" exact />
      <Route component={renderAddProperty} path="/add" exact />
      <Route component={renderInterests} path="/" exact />
    </BrowserRouter>
  )
}
