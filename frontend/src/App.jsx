import react from "react";
import React from "react"
import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login.jsx"
import Cadastro from "./pages/login/Cadastro.jsx"
import {Route, BrowserRouter, Link} from "react-router-dom"
export default function App(){
    return(
        <div>
            {/* <header>
                <div className="header-left">
                    <a href="#contact"className="header-text">Contato</a>
                </div>

                <div className="header-right">
                    <Link to="/cadastro" className="header-text">Cadastre-se</Link>
                    <Link to="/login" className="header-text">Login</Link>
                </div>
            </header> */}
            <BrowserRouter>
                <Route component={Home} path="/asdfsdfasf" exact/>
                <Route component={Login} path="/login" exact/>
                <Route component={Cadastro} path="/" exact/>
            </BrowserRouter>
        </div>
    )
}