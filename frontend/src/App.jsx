import React, {useState} from "react"
import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login.jsx"
import Cadastro from "./pages/login/Cadastro.jsx"
import { Route, BrowserRouter } from "react-router-dom"
import ResetPassword from "./pages/resetPassword/ResetPassword.jsx"
export default function App() {
  const [info, setInfo] = useState({
    logged: false,
    username: undefined,
    name: undefined,
    firstTime: false,
  })

  const renderHome = () => {
    return <Home info={info} />
  }

  const renderLogin = () => {
    return <Login setInfo={setInfo} />
  }

  return (
    <BrowserRouter>
        <Route component={renderHome} path="/" exact />
        <Route component={renderLogin} path="/login" exact />
        <Route component={Cadastro} path="/cadastro" exact />
        <Route component={ResetPassword} path="/reset" exact />
    </BrowserRouter>
  )
}
