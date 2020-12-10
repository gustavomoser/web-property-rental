import "./Home.css"
import React from "react"
import Header from "../../components/header/Header.jsx"

export default function Home() {
  return (
    <div className="App">
      <Header/>
      <div className="Sidebar">
        <h3>Filtros</h3>
        <p className="filtro-title">Preço do Aluguel</p>
        <div className="Filtro">
          <p>De R$</p>
          <input></input>
        </div>
        <div className="Filtro">
          <p>Até R$</p>
          <input></input> 
        </div>

        <p className="filtro-title">Tipo de Imóvel</p>
        <div className="FiltroRadio">
          <input type="radio" value="casa" id="casa" name="tipoImovel" />
          <label htmlFor="casa">Casa</label><br/>
          <input type="radio" value="apartamento" id="apartamento" name="tipoImovel"/>
          <label htmlFor="apartamento">Apartamento</label><br/>
        </div>

        <p className="filtro-title">Quartos</p>
        <div className="FiltroRadio">
          <input type="radio" value="1" id="quartos" name="quartos" />
          <label htmlFor="quartos">1 quarto</label><br/>
          <input type="radio" value="2" id="quartos" name="quartos"/>
          <label htmlFor="quartos">2 quartos</label><br/>
          <input type="radio" value="3+" id="quartos" name="quartos"/>
          <label htmlFor="quartos">3+ quartos</label><br/>
        </div>

        <p className="filtro-title">Banheiros</p>
        <div className="FiltroRadio">
          <input type="radio" value="1" id="banheiro" name="banheiro" />
          <label htmlFor="banheiro">1 banheiro</label><br/>
          <input type="radio" value="2" id="banheiro" name="banheiro"/>
          <label htmlFor="banheiro">2 banheiros</label><br/>
          <input type="radio" value="3+" id="banheiro" name="banheiro"/>
          <label htmlFor="banheiro">3+ banheiros</label><br/>
        </div>

        <p className="filtro-title">Garagem</p>
        <div className="FiltroRadio">
          <input type="radio" value="0" id="garagem" name="garagem" />
          <label htmlFor="garagem">Sem vagas</label><br/>
          <input type="radio" value="1" id="garagem" name="garagem"/>
          <label htmlFor="garagem">1 vaga</label><br/>
          <input type="radio" value="2+" id="garagem" name="garagem"/>
          <label htmlFor="garagem">2+ vagas</label><br/>
        </div>

        

        <button className="filtro-button" type="button">Aplicar Filtros</button>
          
      </div>
    </div >
  )
}
