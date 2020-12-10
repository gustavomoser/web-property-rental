import react from "react";
import React from "react"
import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login.jsx"
import {Route, BrowserRouter} from "react-router-dom"

export default function App(){
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Login} path="/login" exact/>
        </BrowserRouter>
    )
}