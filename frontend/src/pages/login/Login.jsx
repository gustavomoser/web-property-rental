import "./Login.css"
import React from "react"
import Header from "../../components/header/Header.jsx"

export default function Login(){
    return(
        <div className="Login">
            <Header/>
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