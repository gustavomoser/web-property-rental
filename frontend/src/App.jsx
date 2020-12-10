import react from "react";
import React from "react"
import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login.jsx"
import Cadastro from "./pages/login/Cadastro.jsx"
import {Route, BrowserRouter, Link} from "react-router-dom"
export default function App(){
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Login} path="/login" exact/>
            <Route component={Cadastro} path="/cadastro" exact/>
        </BrowserRouter>
    )
}