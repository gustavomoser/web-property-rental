import "./Login.css"
import React from "react"
// import logo from "./imagens/logo-branco.png"

export default function Login(){
    return(
        <div className="Login">
            <header>
                <div className="header-left">
                    <a href="#contact"className="header-text">Contato</a>
                </div>

                <div className="header-right">
                    <a href="#cadastro"className="header-text">Cadastre-se</a>
                    <a href="#login"className="header-text">Login</a>
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