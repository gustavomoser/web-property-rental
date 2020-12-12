import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Header from "../../components/header/Header.jsx"
import { addProperty } from "../../model/requests"
import "./AddProperty.css"

export default function AddProperty(props) {
  const { info, setInfo } = props
  const history = useHistory()
  const [formData, setFormData] = useState({
    nrInscricao: "",
    descricao: "",
    endereco: "",
    tipo: "",
    nrQuartos: "",
    nrBanheiros: "",
    nrGaragens: "",
    valor: "",
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { nrInscricao, descricao, endereco, tipo, nrQuartos, nrBanheiros, nrGaragens, valor } = formData
    if (!nrInscricao || !descricao || !endereco || !tipo || !nrQuartos || !nrBanheiros || !nrGaragens || !valor) {
      alert("Preencha os campos corretamente.")
    } else {
      const response = await addProperty({
        nrInscricao,
        img: "img",
        titulo: descricao,
        endereco,
        tipo,
        nrDormitorios: nrQuartos,
        nrBanheiros,
        nrVagas: nrGaragens,
        valor,
      })
      if (!response?.ok) {
        alert(response.message)
      } else {
        alert("Imóvel salvo com sucesso!")
        history.push("/")
      }
    }
  }

  const handleVoltar = () => history.push("/")

  function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) return false
    return true
  }

  return (
    <div className="Login">
      <Header info={info} setInfo={setInfo} />
      <div className="container">
        <div className="register">
          <p className="title-register">Cadastre um imóvel:</p>
          <form onSubmit={handleSubmit}>
            <div style={{ marginTop: "1rem" }}>
              <label htmlFor="nrInscricao" style={{ marginRight: "2px" }}>
                Numero de Inscrição:
              </label>
              <input type="number" name="nrInscricao" onChange={handleInputChange} onKeyPress={isNumberKey} />
            </div>
            <br />
            <div style={{ marginTop: "1rem" }}>
              <label htmlFor="descricao" style={{ marginRight: "2px" }}>
                Titulo:
              </label>
              <input name="descricao" onChange={handleInputChange} />
            </div>
            <br />
            <div style={{ marginTop: "1rem" }}>
              <label htmlFor="endereco" style={{ marginRight: "2px" }}>
                Endereço:
              </label>
              <input name="endereco" onChange={handleInputChange} />
            </div>
            <fieldset>
              <legend>
                <h2>Tipo do imóvel:</h2>
              </legend>
              <div>
                <div>
                  <input
                    type="radio"
                    name="tipo"
                    value="casa"
                    onChange={handleInputChange}
                    checked={formData.tipo === "casa"}
                  />
                  <label htmlFor="tipo">Casa</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="tipo"
                    value="apartamento"
                    onChange={handleInputChange}
                    checked={formData.tipo === "apartamento"}
                  />
                  <label htmlFor="tipo">Apartamento</label>
                </div>
              </div>
            </fieldset>
            <div>
              <div style={{ marginTop: "1rem" }}>
                <label htmlFor="nrQuartos" style={{ marginRight: "2px" }}>
                  Numero de quartos:
                </label>
                <input type="number" name="nrQuartos" min="0" onChange={handleInputChange} onKeyPress={isNumberKey} />
              </div>
              <br />
              <div style={{ marginTop: "1rem" }}>
                <label htmlFor="nrBanheiros" style={{ marginRight: "2px" }}>
                  Numero de banheiros:
                </label>
                <input type="number" name="nrBanheiros" min="0" onChange={handleInputChange} onKeyPress={isNumberKey} />
              </div>
              <br />
              <div style={{ marginTop: "1rem" }}>
                <label htmlFor="nrGaragens" style={{ marginRight: "2px" }}>
                  Numero de vagas na garagem:
                </label>
                <input type="number" name="nrGaragens" min="0" onChange={handleInputChange} onKeyPress={isNumberKey} />
              </div>
              <br />
              <div style={{ marginTop: "1rem" }}>
                <label htmlFor="valor" style={{ marginRight: "2px" }}>
                  Valor:
                </label>
                <input type="number" name="valor" min="0" onChange={handleInputChange} onKeyPress={isNumberKey} />
              </div>
            </div>
            <div className="button-group">
              <button className="goback-button" onClick={handleVoltar}>
                Voltar
              </button>
              <button type="submit" className="tosubmit-button">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
