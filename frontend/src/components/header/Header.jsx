import "./Header.css"
import React from "react"
import { Link } from "react-router-dom"
import logo from "../../images/header/logo-branco.png"
import { defaultInfo } from "../../App.jsx"

export default function Header(props) {
  const { info, setInfo } = props

  const handleClickSair = () => {
    setInfo(defaultInfo)
  }

  return (
    <div className="Header">
      <header>
        <div className="header-left">
          <img className="header-logo" src={logo}></img>
        </div>

        <div className="header-right">
          {info?.username ? (
            <>
              <div>
                <span>{`Bem vindo, ${info.name}`}</span>
                <br />
                <button onClick={handleClickSair}>
                  <span>Sair</span>
                </button>
              </div>
              <Link to="/reset" className="header-text">
                Alterar senha
              </Link>
            </>
          ) : (
            <Link to="/login" className="header-text">
              Login
            </Link>
          )}
        </div>
      </header>
    </div>
  )
}
