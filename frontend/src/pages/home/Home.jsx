import "./Home.css"
import React, { useState, useEffect } from "react"
import Header from "../../components/header/Header.jsx"
import { getProperties } from "../../model/requests"
import PropertiesList from "../../components/PropertiesList/PropertiesList.jsx"

export default function Home(props) {
  const { info, setInfo } = props
  const [filtroData, setFiltroData] = useState({
    precoMinimo: "",
    precoMaximo: "",
    tipoImovel: "",
    quartos: "",
    banheiros: "",
    garagem: "",
  })

  const [properties, setProperties] = useState()
  useEffect(async () => {
    const response = await getProperties(filtroData)
    const listProperties = [...response]
    setProperties(listProperties)

    console.log(listProperties)
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFiltroData({ ...filtroData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await getProperties(filtroData)
    const listProperties = [...response]
    setProperties(listProperties)

    console.log(listProperties)
  }

  return (
    <div className="App">
      <Header info={info} setInfo={setInfo} />
      <div className="Sidebar">
        <form onSubmit={handleSubmit}>
          <div className="FiltroParent">
            <h3>Filtros</h3>
            <p className="filtro-title">Preço do Aluguel</p>
            <div className="Filtro">
              <p>De R$</p>
              {/* <input type="text" name="username" placeholder="Nome de usuário" onChange={handleInputChange} /> */}
              <input name="precoMinimo" placeholder="Min" onChange={handleInputChange}></input>
            </div>
            <div className="Filtro">
              <p>Até R$</p>
              <input name="precoMaximo" placeholder="Max" onChange={handleInputChange}></input>
            </div>

            <p className="filtro-title">Tipo de Imóvel</p>
            <div className="FiltroRadio">
              <input type="radio" value="" id="tipo-any" name="tipoImovel" onChange={handleInputChange} />
              <label htmlFor="tipo-any">Qualquer</label>
              <br />
              <input type="radio" value="casa" id="tipo-casa" name="tipoImovel" onChange={handleInputChange} />
              <label htmlFor="tipo-casa">Casa</label>
              <br />
              <input
                type="radio"
                value="apartamento"
                id="tipo-apartamento"
                name="tipoImovel"
                onChange={handleInputChange}
              />
              <label htmlFor="tipo-apartamento">Apartamento</label>
              <br />
            </div>

            <p className="filtro-title">Quartos</p>
            <div className="FiltroRadio">
              <input type="radio" value="" id="quartos-any" name="quartos" onChange={handleInputChange} />
              <label htmlFor="quartos-any">Qualquer</label>
              <br />
              <input type="radio" value="1" id="quartos-1" name="quartos" onChange={handleInputChange} />
              <label htmlFor="quartos-1">1 quarto</label>
              <br />
              <input type="radio" value="2" id="quartos-2" name="quartos" onChange={handleInputChange} />
              <label htmlFor="quartos-2">2 quartos</label>
              <br />
              <input type="radio" value="3" id="quartos-3+" name="quartos" onChange={handleInputChange} />
              <label htmlFor="quartos-3+">3+ quartos</label>
              <br />
            </div>

            <p className="filtro-title">Banheiros</p>
            <div className="FiltroRadio">
              <input type="radio" value="" id="banheiros-any" name="banheiros" onChange={handleInputChange} />
              <label htmlFor="banheiros-any">Qualquer</label>
              <br />
              <input type="radio" value="1" id="banheiros-1" name="banheiros" onChange={handleInputChange} />
              <label htmlFor="banheiros-1">1 banheiro</label>
              <br />
              <input type="radio" value="2" id="banheiros-2" name="banheiros" onChange={handleInputChange} />
              <label htmlFor="banheiros-2">2 banheiros</label>
              <br />
              <input type="radio" value="3" id="banheiros-3+" name="banheiros" onChange={handleInputChange} />
              <label htmlFor="banheiros-3+">3+ banheiros</label>
              <br />
            </div>

            <p className="filtro-title">Garagem</p>
            <div className="FiltroRadio">
              <input type="radio" value="" id="garagem-any" name="garagem" onChange={handleInputChange} />
              <label htmlFor="garagem-any">Qualquer</label>
              <br />
              <input type="radio" value="0" id="garagem-0" name="garagem" onChange={handleInputChange} />
              <label htmlFor="garagem-0">Sem vagas</label>
              <br />
              <input type="radio" value="1" id="garagem-1" name="garagem" onChange={handleInputChange} />
              <label htmlFor="garagem-1">1 vaga</label>
              <br />
              <input type="radio" value="2" id="garagem-2+" name="garagem" onChange={handleInputChange} />
              <label htmlFor="garagem-2+">2+ vagas</label>
              <br />
            </div>
          </div>
          {/* <button className="filtro-button" type="submit" value="Aplicar Filtros"/> */}
          <button className="filtro-button" type="submit">
            Aplicar Filtros
          </button>
        </form>
      </div>
      <div className="properties-parent">
        <PropertiesList properties={properties}/>
        {/* <div className="Teste"/> */}
      </div>

    </div >
  )
}
