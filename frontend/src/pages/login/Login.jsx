import "./Login.css"
import React from "react"
import { Link } from 'react-router-dom'
// import logo from "./imagens/logo-branco.png"

export default function Login(){
    return(
        <div className="Login">
            <header>
                <div className="header-left">
                    <a href="#contact"className="header-text">Contato</a>
                </div>

                <div className="header-right">
                    <Link to="/cadastro" className="header-text">Cadastre-se</Link>
                    <Link to="/login" className="header-text">Login</Link>
                </div>
            </header>

            <div className="container">
                <div className="register">
                    <p className="title-register">Faça seu login:</p>
                    <form>
                        <input type="text" name="username" placeholder="Nome de usuário"></input>
                        <input type="text" name="password" placeholder="Senha"></input>
                        <button className="submit-button">Login</button>
                    </form>
                </div>
            </div>
        </div>
        



    )
}