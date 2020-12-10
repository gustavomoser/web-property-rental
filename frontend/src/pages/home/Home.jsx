import "./Home.css"
import React from "react"
import Header from "../../components/header/Header.jsx"
import { Link } from "react-router-dom"

export default function Home(props) {
  return (
    <div className="App">
      <Header />
      <div>
        <div className="Sidebar">
          <h3>Filtros</h3>
          <p>Preço</p>
          <div className="Filtro">
            <p>De R$</p>
            <input></input>
          </div>
          <div className="Filtro">
            <p>Até R$</p>
            <input></input>
          </div>

          <p>Tipo de Imóvel</p>
          <div className="Filtro">
            <input type="radio" value="casa" id="casa" name="tipoImovel" />
            <label htmlFor="casa">Casa</label>

            <input type="radio" value="apartamento" id="apartamento" name="tipoImovel" />
            <label htmlFor="apartamento">Apto</label>
          </div>

          <button type="button">Aplicar Filtros</button>
          <Link to="/reset">
            <button type="button">reset</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
