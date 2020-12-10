import "./Login.css"
import React from "react"
import { Link } from 'react-router-dom'
import logo from "./imagens/logo-branco.png"

export default function Login(){
    return(
        <div className="Login">
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

            <div className="container">
                <div className="register">
                    <p className="title-register">Faça seu cadastro:</p>
                    <form>
                        <input type="text" name="username" placeholder="Nome de usuário"></input>
                        <input type="password" name="password" placeholder="Senha"></input>
                        <input type="password" name="password" placeholder="Redigite a senha"></input>
                        <button className="submit-button">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}