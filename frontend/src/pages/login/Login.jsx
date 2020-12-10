import "./Login.css"
import React from "react"
// import logo from "./imagens/logo-branco.png"

export default function Login(){
    return(

        <body>
            <div className="header">
                <div className="header-left">
                    {/* <img className="header-logo" src={logo}></img> */}
                        {/* <a href="index.html">
                            
                        </a> */}
                        <a href="#contact"className="header-text">Contato</a>
                    </div>

                    <div className="header-right">
                        <a href="#cadastro"className="header-text">Cadastre-se</a>
                        <a href="#login"className="header-text">Login</a>
                    </div>
            </div>

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
        </body>



    )
}