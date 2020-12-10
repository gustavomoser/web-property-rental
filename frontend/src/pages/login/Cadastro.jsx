import "./Login.css"
import React from "react"
import Header from "../../components/header/Header.jsx"

export default function Login(){
    return(
        <div className="Login">
            <Header/>
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