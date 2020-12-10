import "./Login.css"
import React from "react"

export default function Login(){
    return(
        <body>
            <div>
                <h1>Login</h1>
                <div className="LoginDiv">
                    <p>Usuário</p>
                    <input></input>
                </div>
                <div className="LoginDiv">
                    <p>Senha</p>
                    <input></input>
                </div>
            </div>
        </body>
    )
}