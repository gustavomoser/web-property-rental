import "./Login.css"
import React from "react"
import { Link } from 'react-router-dom'
import logo from "./imagens/logo-branco.png"

export default function Login(){
    return(
        <div className="Header">
            <header>
                <div className="header-left">
                    <img className="header-logo" src={logo}></img>
                    <a href="#contact"className="header-text">Contato</a>
                </div>

                <div className="header-right">
                    <Link to="/cadastro" className="header-text">Cadastre-se</Link>
                    <Link to="/login" className="header-text">Login</Link>
                </div>
            </header>
        </div>
    )
}